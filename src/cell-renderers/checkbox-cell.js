import React from 'react'
import { Checkbox, Icon } from 'semantic-ui-react'
import { get } from 'lodash'

export const CheckboxCell = ({ cellData, rowData, column, ...rest }) => {
  const onSelect = get(column, 'onSelect')
  const onSelectAll = get(column, 'onSelectAll')
  const allSelected = get(column, 'allSelected', false)
  const props = get(column, 'props')
  const selectedRows = get(column, 'selectedRows', [])
  const header = 'headerIndex' in rest

  if (header) {
    let props = { name: 'x', color: 'red' }
    if (allSelected) props = { name: 'checkmark', color: 'green' }
    return (
      <Icon
        {...props}
        onClick={() => {
          if (onSelectAll) onSelectAll()
        }}
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
