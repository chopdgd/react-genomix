import React from 'react'
import { Column } from 'react-base-table'

import { hooks, BasicTable } from '../../../src'

const rows = Array.from(new Array(30), (x, i) => ({
  id: i,
}))

const BasicTableExample = () => {
  const { innerHeight: height } = hooks.useWindowSize()

  return (
    <BasicTable data={rows} headerHeight={55} rowHeight={40} maxHeight={height - 400}>
      <Column key="id" dataKey="id" flexGrow={0} width={50} frozen="left" />
    </BasicTable>
  )
}

export default BasicTableExample
