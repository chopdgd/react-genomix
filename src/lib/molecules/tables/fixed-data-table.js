import React from 'react'
import PropTypes from 'prop-types'
import { AutoSizer } from 'react-virtualized'
import { Table } from 'fixed-data-table-2'
import { get, indexOf, map, sortBy } from 'lodash'
import update from 'immutability-helper';


class FixedDataTable extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      columnWidths: props.columnWidths,
      columnOrder: props.columnOrder,
    }
  }

  static getDerivedStateFromProps(props, state) {
    const { columnWidths, columnOrder } = props

    if (columnWidths !== state.columnWidths || columnOrder !== state.columnOrder) {
      return { columnWidths, columnOrder }
    }

    return null
  }

  onColumnResizeEndCallback = (newColumnWidth, columnKey) => {
    const { columnWidths } = this.state
    const newColumnWidths = update(columnWidths, {[columnKey]: {$set: newColumnWidth}})
    this.setState({ columnWidths: newColumnWidths })

    const { onColumnResize } = this.props
    if (onColumnResize) onColumnResize(newColumnWidths)
  }

  // SEE: https://github.com/schrodinger/fixed-data-table-2/blob/master/examples/ReorderExample.js#L57-L76
  onColumnReorderEndCallback = (event) => {
    const columnOrder = this.state.columnOrder.filter(columnKey => columnKey !== event.reorderColumn)

    if (event.columnAfter) {
      const index = columnOrder.indexOf(event.columnAfter);
      columnOrder.splice(index, 0, event.reorderColumn);
    } else {
      columnOrder.push(event.reorderColumn);
    }

    this.setState({ columnOrder })

    const { onColumnReorder } = this.props
    if (onColumnReorder) onColumnReorder(columnOrder)
  }

  render() {
    const {
      columnOrder,
      columnWidths,
      children,
      fixedColumns,
      onColumnResize,
      onColumnReorder,
      maxHeight,
      ...rest
     } = this.props

    // Add adjustable width to Columns
    const columns = []
    React.Children.map(children, column => {
      const columnObject = {
        order: indexOf(this.state.columnOrder, column.props.columnKey),
        column: React.cloneElement(column, {
          key: column.props.columnKey,
          width: get(this.state, `columnWidths.${column.props.columnKey}`, ''),
          fixed: fixedColumns.includes(column.props.columnKey),
        })
      }
      columns.push(columnObject)
    })

    // Render columns in adjusted order
    const orderedColumns = sortBy(columns, ['order'])
    const orderedChildren = map(orderedColumns, (column) => column.column)

    return (
      <AutoSizer disableHeight>
        {({ width }) => (
          <Table
            className="genomix fixed-data table"
            width={width}
            onColumnResizeEndCallback={this.onColumnResizeEndCallback}
            onColumnReorderEndCallback={this.onColumnReorderEndCallback}
            maxHeight={maxHeight}
            {...rest}
          >
            {orderedChildren}
          </Table>
        )}
      </AutoSizer>
    )
  }
}


FixedDataTable.propTypes = {
  columnOrder: PropTypes.arrayOf(PropTypes.string).isRequired,
  onColumnReorder: PropTypes.func,
  columnWidths: PropTypes.object.isRequired,
  onResizeColumn: PropTypes.func,
  fixedColumns: PropTypes.arrayOf(PropTypes.string),
}

FixedDataTable.defaultProps = {
  fixedColumns: [],
  maxHeight: 1200,
}


export default FixedDataTable
