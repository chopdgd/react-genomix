import React, { useState } from 'react'
import PropTypes from 'prop-types'
import BaseTable, { AutoResizer, Column } from 'react-base-table'
import 'react-base-table/styles.css'
import { Segment, Checkbox, Label } from 'semantic-ui-react'
import { get, map } from 'lodash'

const SelectionTable = ({
  children,
  rows = [],
  selectedRows = [],
  rowSelect,
  rowSelectAll,
  maxHeight = 500,
  loading,
  ...rest
}) => {
  const [allChecked, setAllChecked] = useState(false)
  const onSelectAll = data => {
    if (!allChecked) {
      rowSelectAll(map(data, row => row.id))
    } else {
      rowSelectAll([])
    }
    setAllChecked(!allChecked)
  }

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

  return (
    <Segment basic size="mini" textAlign="center" style={{ padding: 0, width: '100%', height: 500 }}>
      <AutoResizer>
        {({ width, height }) => (
          <BaseTable
            data={rows}
            width={width}
            height={height}
            maxHeight={maxHeight}
            footerHeight={loading ? 50 : 0}
            overlayRenderer={<p>hello</p>}
            onEndReachedThreshold={300}
            onEndReached={() => console.log('end reached')}
          >
            <Column
              key="id"
              dataKey="id"
              flexGrow={0}
              width={50}
              frozen="left"
              cellRenderer={CheckboxCell}
              headerRenderer={CheckboxHeaderCell}
              onSelect={rowSelect}
              onSelectAll={onSelectAll}
              selectedRows={selectedRows}
              allChecked={allChecked}
            />
            {children}
          </BaseTable>
        )}
      </AutoResizer>
    </Segment>
  )
}

SelectionTable.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      symbol: PropTypes.string,
    })
  ),
}

export default SelectionTable
