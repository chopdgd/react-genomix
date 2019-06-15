import React from 'react'
import ReactDOM from 'react-dom'
import { Cell, Column } from 'fixed-data-table-2'

import { InfiniteScrollTable, TextFixedCell } from '../index'

const list = Array.from(new Array(1), (x, i) => ({
  name: 'Mike',
  text: 'text',
}))

const initialColumnOrder = ['name', 'text']
const initialColumnSizes = { name: 50, text: 100 }

const TestTable = ({ ...props }) => {
  return (
    <InfiniteScrollTable
      maxHeight={500}
      headerHeight={100}
      rowHeight={100}
      columnOrder={initialColumnOrder}
      onColumnReorder={props.onColumnReorder}
      columnWidths={initialColumnSizes}
      onColumnResize={props.onColumnResize}
      fixedColumns={props.fixedColumns}
    >
      <Column header={<Cell>Header</Cell>} cell={<TextFixedCell data={props.data} />} columnKey="name" width={100} />
      <Column header={<Cell>Header</Cell>} cell={<TextFixedCell data={props.data} />} columnKey="text" width={100} />
    </InfiniteScrollTable>
  )
}

describe('Test FixedDataTable', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<TestTable rows={list} />, div)
  })
})
