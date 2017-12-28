import React from 'react'
import PropTypes from 'prop-types'
import { Dimmer, Loader } from 'semantic-ui-react'
import { AutoSizer } from 'react-virtualized'
import { Table } from 'fixed-data-table-2'
import { concat, differenceWith, get, isEqual, indexOf, map, sortBy } from 'lodash'


class FixedDataTable extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      rows: props.data,
      loading: props.loading,
      columnWidths: props.columnWidths,
      columnOrder: props.columnOrder,
      fixedColumns: props.fixedColumns,
    }
  }

  componentWillReceiveProps(nextProps) {
    const { columnWidths, columnOrder, data, fixedColumns, loading } = this.props

    if (nextProps.data !== data) {
      const { rows } = this.state
      const newData = differenceWith(nextProps.data, rows, isEqual)
      if (newData.length > 0) {
        this.setState({ rows: concat(rows, newData) })
      }
    }

    if (nextProps.loading !== loading) {
      this.setState({ loading: nextProps.loading })
    }

    if (nextProps.columnWidths !== columnWidths) {
      this.setState({ columnWidths: nextProps.columnWidths })
    }

    if (nextProps.columnOrder !== columnOrder) {
      this.setState({ columnOrder: nextProps.columnOrder })
    }

    if (nextProps.fixedColumns !== fixedColumns) {
      this.setState({ fixedColumns: nextProps.fixedColumns })
    }
  }

  onColumnResizeEndCallback = (newColumnWidth, columnKey) => {
    const { columnWidths } = this.state
    const newColumnWidths = {
      ...columnWidths,
      [columnKey]: newColumnWidth,
    }

    this.setState({ columnWidths: newColumnWidths })

    const { onColumnResize } = this.props
    if (onColumnResize) {
      onColumnResize(newColumnWidths)
    }
  }

  onColumnReorderEndCallback = (event) => {
    const columnOrder = this.state.columnOrder.filter(columnKey => columnKey !== event.reorderColumn)

    if (event.columnAfter) {
      const columnIndex = columnOrder.indexOf(event.columnAfter)
      columnOrder.splice(columnIndex, 0, event.reorderColumn)
    } else {
      columnOrder.push(event.reorderColumn)
    }

    this.setState({ columnOrder: columnOrder })

    const { onColumnReorder } = this.props
    if (onColumnReorder) {
      onColumnReorder(columnOrder)
    }
  }

  render() {
    const {
      columnWidths,
      children,
      maxHeight,
      headerHeight,
      rowHeight,
      loading,
      onColumnResize,
      onColumnReorder,
      ...rest,
     } = this.props

    const { rows, columnOrder, fixedColumns } = this.state
    const rowsCount = rows.length

    // Add adjustable width to Columns
    const columns = []
    React.Children.map(children, (column: React.ReactElement<ColumnPropsInternal>) => {
      const columnObject = {
        order: indexOf(columnOrder, column.props.columnKey),
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
      <Dimmer.Dimmable dimmed={loading}>
        <Dimmer active={loading} inverted>
          <Loader>Loading Results</Loader>
        </Dimmer>
        <AutoSizer disableHeight>
          {({ width }) => (
            <Table
              className="genomix fixed-data table"
              maxHeight={maxHeight}
              width={width}
              rowsCount={rowsCount}
              headerHeight={headerHeight}
              rowHeight={rowHeight}
              onColumnResizeEndCallback={this.onColumnResizeEndCallback}
              onColumnReorderEndCallback={this.onColumnReorderEndCallback}
              isColumnReordering={false}
              isColumnResizing={false}
              showScrollbarY={false}
              {...rest}
            >
              {orderedChildren}
            </Table>
          )}
        </AutoSizer>
      </Dimmer.Dimmable>
    )
  }
}


FixedDataTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  columnWidths: PropTypes.object.isRequired,
  onResizeColumn: PropTypes.func,
  columnOrder: PropTypes.arrayOf(PropTypes.string).isRequired,
  onColumnReorder: PropTypes.func,
  fixedColumns: PropTypes.arrayOf(PropTypes.string),
}

FixedDataTable.defaultProps = {
  data: [],
  loading: false,
  fixedColumns: [],
}

export default FixedDataTable
