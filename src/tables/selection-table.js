import React from 'react'
import PropTypes from 'prop-types'
import { Column } from 'react-base-table'
import { BasicTable } from '../../src'
import { Checkbox } from 'semantic-ui-react'
import { get } from 'lodash'

const CheckboxCell = props => {
  const { cellData, column } = props
  const { selectedRows, onSelect } = column
  return <Checkbox checked={selectedRows.includes(cellData)} onChange={() => onSelect(cellData)} />
}

const CheckboxHeaderCell = props => {
  const { container, column } = props
  const { selectedRows, onSelectAll } = column
  const data = get(container, '_data', [])
  return (
    <Checkbox
      checked={selectedRows.length === data.length}
      indeterminate={selectedRows.length > 0 && selectedRows.length !== data.length}
      onChange={onSelectAll}
    />
  )
}

const SelectionTable = ({
  children,
  rows = [],
  selectedRows = [],
  checkBoxKey = 'id',
  onSelect,
  onSelectAll,
  ...rest
}) => (
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

SelectionTable.propTypes = {
  children: PropTypes.any,
  rows: PropTypes.array,
  selectedRows: PropTypes.array,
  checkBoxKey: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
  onSelectAll: PropTypes.func.isRequired,
}

export default SelectionTable
