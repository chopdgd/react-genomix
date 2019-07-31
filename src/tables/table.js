import React, { useEffect, useState } from 'react'
import BaseTable from 'react-base-table'
import AutoSizer from 'react-virtualized-auto-sizer'
import { get } from 'lodash'

import { LoadingFooterRenderer } from '../../src/index'
import { useLocalStorage } from '../hooks/use-local-storage'

const Table = ({
  data = [],
  widths = {},
  height = 200,
  width = 500,
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
        setLoading(false)
      }
      setLoading(true)
    }
  }

  const props = {
    fixed: true,
    data,
    height,
    footerHeight: isLoading ? 50 : 0,
    footerRenderer: LoadingFooterRenderer,
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
