import React from 'react'
import PropTypes from 'prop-types'
import { Segment } from 'semantic-ui-react'

import { hooks, FixedDataTable } from '../index'

const InfiniteScrollTable = ({
  hasNextPage = false,
  loading = false,
  rows = [],
  pixelsRefetch = 100,
  children,
  yOffset = 0,
  onFetch,
  onScrollEnd,
  segment = { size: 'mini', style: { padding: 0, width: '100%' }, textAlign: 'center' },
  ...rest
}) => {
  const { innerHeight: height } = hooks.useWindowSize()
  const maxHeight = height - yOffset
  return (
    <Segment loading={loading} {...segment}>
      <FixedDataTable
        maxHeight={maxHeight}
        rowsCount={rows.length}
        onScrollEnd={(x, y, row) => {
          const heightLeft = (rows.length - row) * 40
          const difference = heightLeft - maxHeight
          if (difference < pixelsRefetch && hasNextPage && onFetch) onFetch()
          if (onScrollEnd) onScrollEnd(x, y, row)
        }}
        {...rest}
      >
        {children}
      </FixedDataTable>
    </Segment>
  )
}

InfiniteScrollTable.propTypes = {
  hasNextPage: PropTypes.bool,
  loading: PropTypes.bool,
  rows: PropTypes.array,
  pixelsRefetch: PropTypes.number,
  children: PropTypes.node,
  yOffset: PropTypes.number,
  onFetch: PropTypes.func,
  onScrollEnd: PropTypes.func,
  segment: PropTypes.shape(),
}

export default InfiniteScrollTable
