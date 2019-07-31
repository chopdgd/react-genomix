import React, { useEffect, useState } from 'react'
import BaseTable from 'react-base-table'
import AutoSizer from 'react-virtualized-auto-sizer'
import { Dimmer, Header, Loader, Segment } from 'semantic-ui-react'
import { get } from 'lodash'

import { useLocalStorage } from '../hooks/use-local-storage'

export const NoDataRenderer = () => {
  return (
    <Segment textAlign="center">
      <Header content="No Data!" />
    </Segment>
  )
}

export const LoadingFooterRenderer = () => {
  return (
    <Dimmer inverted active>
      <Loader size="tiny">Loading more...</Loader>
    </Dimmer>
  )
}

export const Table = ({
  data = [],
  widths = {},
  height = 200,
  width = 500,
  noDataHeight = 100,
  footerHeight = 50,
  responsive = false,
  loading = false,
  onFetch,
  children,
  ...rest
}) => {
  const [state, setState] = useLocalStorage('widths', widths)
  const columns = children.map(item => React.cloneElement(item, { width: get(state, item.props.dataKey, 100) }))

  const [isLoading, setLoading] = useState(loading)
  useEffect(() => setLoading(loading), [loading])

  const onEndReached = () => {
    if (onFetch) {
      if (!isLoading) {
        onFetch()
        setLoading(true)
      }
    }
  }

  const props = {
    fixed: true,
    data,
    height: data.length === 0 ? noDataHeight : height,
    footerHeight: isLoading ? footerHeight : 0,
    footerRenderer: LoadingFooterRenderer,
    emptyRenderer: NoDataRenderer,
    onColumnResize: ({ column, width }) => setState({ [column.key]: width }),
    onEndReached,
  }

  if (responsive) {
    return (
      <AutoSizer disableHeight>
        {({ width: autoWidth }) => {
          return (
            <BaseTable width={autoWidth} {...props} {...rest}>
              {columns}
            </BaseTable>
          )
        }}
      </AutoSizer>
    )
  }

  return (
    <BaseTable width={width} {...props} {...rest}>
      {columns}
    </BaseTable>
  )
}

export default Table
