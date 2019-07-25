import React, { useState } from 'react'
import { Column } from 'react-base-table'
import { Icon, Popup } from 'semantic-ui-react'
import { hooks, BasicTable } from '../../../src'

const PAGE_SIZE = 100

const rows = Array.from(new Array(1000), (x, i) => ({
  id: i,
  text: `text ${i}`,
  icon: `icon ${i}`,
}))

const IconCell = props => {
  const { cellData } = props
  return <Popup content={cellData} trigger={<Icon name="info circle" />} />
}

const InfiniteTableExample = () => {
  const [loading, setLoading] = useState(true)
  const { innerHeight: height } = hooks.useWindowSize()
  const [offset, setOffset] = useState(0)
  const [data, setData] = useState(rows.slice(0, offset + PAGE_SIZE))

  const loadData = () => {
    setOffset(offset + PAGE_SIZE)
    setData(rows.slice(0, offset + PAGE_SIZE))
  }

  setTimeout(function() {
    setLoading(false)
  }, 3000)

  const columnWidths = {
    id: 300,
    text: 300,
    icon: 300,
  }

  return (
    <BasicTable
      columnWidths={columnWidths}
      loading={loading}
      data={data}
      headerHeight={55}
      rowHeight={40}
      maxHeight={height - 400}
      onEndReachedThreshold={300}
      onEndReached={loadData}
    >
      <Column title="id" key="id" dataKey="id" flexGrow={1} width={300} frozen="left" resizable />
      <Column title="text" key="text" dataKey="text" flexGrow={1} width={300} resizable />
      <Column
        title="icon"
        key="icon"
        dataKey="icon"
        cellRenderer={IconCell}
        flexGrow={1}
        width={300}
        frozen="right"
        resizable
      />
    </BasicTable>
  )
}

export default InfiniteTableExample
