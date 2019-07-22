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
  const { selectedRows, allChecked, onSelectAll } = column
  const data = get(container, '_data', [])
  return (
    <Checkbox
      checked={allChecked}
      indeterminate={allChecked && selectedRows.length !== data.length}
      onChange={() => onSelectAll(data)}
    />
  )
}

const SelectionTable = ({
  children,
  rows = [],
  selectedRows = [],
  allChecked = false,
  checkBoxKey = "id",
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
      allChecked={allChecked}
    />
    {children}
  </BasicTable>
)

SelectionTable.propTypes = {
  children: PropTypes.any,
  rows: PropTypes.array,
  selectedRows: PropTypes.array,
  allChecked: PropTypes.bool,
  checkBoxKey: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
  onSelectAll: PropTypes.func.isRequired,
}

export default SelectionTable
