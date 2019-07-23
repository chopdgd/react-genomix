import React from 'react'
import PropTypes from 'prop-types'
import { Column } from 'react-base-table'
import { BasicTable, hooks } from '../../src'
import { Checkbox } from 'semantic-ui-react'
import { get, map } from 'lodash'

const SelectionTable = ({ children, rows = [], checkBoxKey = 'id', onSelect, onSelectAll, ...rest }) => {
  const [selectedRows, setSelectedRows, resetSelectedRows] = hooks.useStateList([])

  const handleSelectAll = (event, data) => {
    if (data.checked) {
      resetSelectedRows(map(rows, obj => obj.id))
    } else {
      resetSelectedRows([])
    }
  }

  const CheckboxCell = props => {
    const { cellData, rowData, column } = props
    const { selectedRows, onSelect } = column
    return (
      <Checkbox
        checked={selectedRows.includes(cellData)}
        onChange={(e, data) => {
          setSelectedRows(cellData)
          onSelect(e, { ...rowData })
        }}
      />
    )
  }

  const CheckboxHeaderCell = props => {
    const { container, column } = props
    const { selectedRows, onSelectAll } = column
    const data = get(container, '_data', [])
    return (
      <Checkbox
        checked={selectedRows.length === data.length}
        indeterminate={selectedRows.length > 0 && selectedRows.length !== data.length}
        onChange={(e, data) => {
          handleSelectAll(e, data)
          onSelectAll(e, data)
        }}
      />
    )
  }

  return (
    <BasicTable data={rows} {...rest}>
      <Column
        key={checkBoxKey}
        dataKey={checkBoxKey}
        flexGrow={0}
        width={100}
        frozen="left"
        cellRenderer={CheckboxCell}
        headerRenderer={CheckboxHeaderCell}
        onSelect={onSelect}
        onSelectAll={onSelectAll}
        selectedRows={selectedRows}
      />
      {children}
    </BasicTable>
  )
}

SelectionTable.propTypes = {
  children: PropTypes.any,
  rows: PropTypes.array,
  checkBoxKey: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
  onSelectAll: PropTypes.func.isRequired,
}

export default SelectionTable
