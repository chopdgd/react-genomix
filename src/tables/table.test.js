import React from 'react'
import ReactDOM from 'react-dom'
import { Column } from 'react-base-table'

import { Table } from './table'

const list = Array.from(new Array(1), (x, i) => ({
  id: i,
  name: 'Mike',
  text: 'text',
}))

const TestTable = props => (
  <Table {...props} maxHeight={500} headerHeight={100} rowHeight={100}>
    <Column title="name" key="name" dataKey="name" flexGrow={1} width={300} />
    <Column title="text" key="text" dataKey="text" flexGrow={1} width={300} />
  </Table>
)

describe('Test BasicTable', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(TestTable({ data: list }), div)
  })
})
