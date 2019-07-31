import React from 'react'
import { Checkbox } from 'semantic-ui-react'
import { get } from 'lodash'

export const CheckboxCell = ({ cellData, rowData, column, ...rest }) => {
  const onSelect = get(column, 'onSelect')
  const onSelectAll = get(column, 'onSelectAll')
  const props = get(column, 'props')
  const selectedRows = get(column, 'selectedRows', [])
  return (
    <Checkbox
      checked={selectedRows.includes(cellData)}
      {...props}
      onChange={(e, data) => {
        const header = 'headerIndex' in rest
        if (header) {
          if (onSelectAll) onSelectAll()
        } else {
          if (onSelect) onSelect(e, { ...data, cellData, rowData })
        }
      }}
    />
  )
}

export default CheckboxCell
