import React from 'react'
import BaseTable from 'react-base-table'
import AutoSizer from 'react-virtualized-auto-sizer'
import { get } from 'lodash'

import { useLocalStorage } from '../hooks/use-local-storage'

const Table = ({ data = [], widths = {}, height = 200, width = 500, responsive = false, children, ...rest }) => {
  const [state, setState] = useLocalStorage('widths', widths)
  const columns = children.map(item => React.cloneElement(item, { width: get(state, item.props.dataKey, 100) }))
  const props = {
    fixed: true,
    data,
    height,
    onColumnResize: ({ column, width }) => setState({ [column.key]: width }),
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
