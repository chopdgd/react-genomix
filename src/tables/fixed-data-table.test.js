import React from 'react'
import ReactDOM from 'react-dom'
import { Cell, Column } from 'fixed-data-table-2'

import { FixedDataTable, TextFixedCell } from '../index'

const list = Array.from(new Array(1), (x, i) => ({
  name: 'Mike',
  text: 'text',
}))

const initialColumnOrder = ['name', 'text']
const initialColumnSizes = { name: 50, text: 100 }

const TestTable = ({ ...props }) => {
  return (
    <FixedDataTable
      rowsCount={props.data.length}
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
    </FixedDataTable>
  )
}

describe('Test FixedDataTable', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(TestTable({ data: list }), div)
  })
})
