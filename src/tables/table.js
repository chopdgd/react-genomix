import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import BaseTable from 'react-base-table'
import AutoSizer from 'react-virtualized-auto-sizer'
import { Dimmer, Header, Loader, Segment } from 'semantic-ui-react'

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
      <Loader size="tiny" content="Loading more..." />
    </Dimmer>
  )
}

export const Table = ({
  data = [],
  widths = {},
  height = 500,
  width = 500,
  noDataHeight = 100,
  footerHeight = 50,
  responsive = false,
  loading = false,
  onFetch,
  children,
  ...rest
}) => {
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
    onEndReached,
  }

  if (responsive) {
    return (
      <AutoSizer disableHeight>
        {({ width: autoWidth }) => {
          return (
            <BaseTable width={autoWidth} {...props} {...rest}>
              {children}
            </BaseTable>
          )
        }}
      </AutoSizer>
    )
  }

  return (
    <BaseTable width={width} {...props} {...rest}>
      {children}
    </BaseTable>
  )
}

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})),
  height: PropTypes.number,
  width: PropTypes.number,
  noDataHeight: PropTypes.number,
  footerHeight: PropTypes.number,
  responsive: PropTypes.bool,
  loading: PropTypes.bool,
  onFetch: PropTypes.func,
  children: PropTypes.arrayOf(PropTypes.object),
}

export default Table
