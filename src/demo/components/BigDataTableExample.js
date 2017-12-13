import React from 'react'
import { Column } from 'react-virtualized'

import { BigDataTable } from 'LibIndex'


const list = Array.from(new Array(30), (x,i) => ({
  name: 'Brian Vaughn',
  description: 'Software engineer'
}))


const ExampleInfiniteTable = () => (
  <BigDataTable
    data={list}
    height={400}
  >
    <Column
      label="Name"
      dataKey="name"
      width={100}
    />
    <Column
      label="Description"
      dataKey="description"
      width={150}
    />
  </BigDataTable>
)

export default ExampleInfiniteTable
