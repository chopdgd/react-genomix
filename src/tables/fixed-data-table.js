import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Table } from 'fixed-data-table-2'
import { get, indexOf, map, sortBy } from 'lodash'

import { hooks } from '../index'

const FixedDataTable = props => {
  const {
    columnWidths: defaultWidths,
    columnOrder: defaultOrder,
    onColumnReorder,
    onColumnResize,
    children,
    fixedColumns,
    widthOffset,
    heightOffset,
    ...rest
  } = props

  const [columnWidths, setColumnWidths] = useState(defaultWidths)
  const [columnOrder, setColumnOrder] = useState(defaultOrder)

  const onColumnResizeEndCallback = (newColumnWidth, columnKey) => {
    const newWidths = { ...columnWidths, [columnKey]: newColumnWidth }
    setColumnWidths(newWidths)
    if (onColumnResize) onColumnResize(newWidths)
  }

  // SEE: https://github.com/schrodinger/fixed-data-table-2/blob/master/examples/ReorderExample.js#L57-L76
  const onColumnReorderEndCallback = event => {
    const order = columnOrder.filter(columnKey => columnKey !== event.reorderColumn)

    if (event.columnAfter) {
      const index = order.indexOf(event.columnAfter)
      order.splice(index, 0, event.reorderColumn)
    } else {
      order.push(event.reorderColumn)
    }

    setColumnOrder(order)
    if (onColumnReorder) onColumnReorder(columnOrder)
  }

  // Add adjustable width to Columns
  const columns = []
  React.Children.map(children, column => {
    const columnObject = {
      order: indexOf(columnOrder, column.props.columnKey),
      column: React.cloneElement(column, {
        key: column.props.columnKey,
        width: get(columnWidths, `${column.props.columnKey}`, ''),
        fixed: fixedColumns.includes(column.props.columnKey),
      }),
    }
    columns.push(columnObject)
  })

  // Render columns in adjusted order
  const orderedColumns = sortBy(columns, ['order'])
  const orderedChildren = map(orderedColumns, column => column.column)

  const { innerHeight: height, innerWidth: width } = hooks.useWindowSize()

  return (
    <Table
      {...rest}
      className="genomix fixed-data table"
      width={width - widthOffset}
      onColumnResizeEndCallback={onColumnResizeEndCallback}
      onColumnReorderEndCallback={onColumnReorderEndCallback}
      maxHeight={height - heightOffset}
    >
      {orderedChildren}
    </Table>
  )
}

FixedDataTable.propTypes = {
  columnOrder: PropTypes.arrayOf(PropTypes.string).isRequired,
  onColumnReorder: PropTypes.func,
  columnWidths: PropTypes.object.isRequired,
  onResizeColumn: PropTypes.func,
  fixedColumns: PropTypes.arrayOf(PropTypes.string),
  widthOffset: PropTypes.number,
  heightOffset: PropTypes.number,
}

FixedDataTable.defaultProps = {
  fixedColumns: [],
  widthOffset: 200,
  heightOffset: 200,
}

export default FixedDataTable
