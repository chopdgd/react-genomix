import React from 'react'
import { Checkbox } from 'semantic-ui-react'
import { get } from 'lodash'

export const CheckboxCell = ({ cellData, rowData, column, ...rest }) => {
  const onSelect = get(column, 'onSelect')
  const onSelectAll = get(column, 'onSelectAll')
  const props = get(column, 'props')
  const selectedRows = get(column, 'selectedRows', [])
  const header = 'headerIndex' in rest
  const container = get(rest, 'container')
  const rows = get(container, '_data', [])

  if (header) {
    return (
      <Checkbox
        checked={selectedRows.length >= rows.length && rows.length > 0}
        indeterminate={selectedRows.length > 0 && selectedRows.length !== rows.length}
        onChange={(e, data) => {
          if (onSelectAll) onSelectAll(e, data, rows)
        }}
        {...props}
      />
    )
  }

  return (
    <Checkbox
      checked={selectedRows.includes(cellData)}
      {...props}
      onChange={(e, data) => {
        if (onSelect) onSelect(e, { ...data, cellData, rowData })
      }}
    />
  )
}

export default CheckboxCell
