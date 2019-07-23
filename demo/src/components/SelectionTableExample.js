import React, { useState } from 'react'
import { Column } from 'react-base-table'
import { Icon, Popup } from 'semantic-ui-react'
import { hooks, SelectionTable } from '../../../src'
import { map } from 'lodash'

const rows = Array.from(new Array(300), (x, i) => ({
  id: i,
  text: `text ${i}`,
  icon: `icon ${i}`,
}))

const IconCell = props => {
  const { cellData } = props
  return <Popup content={cellData} trigger={<Icon name="info circle" />} />
}

const SelectionTableExample = () => {
  const [loading, setLoading] = useState(true)
  const [selectedRows, setSelectedRows, resetSelectedRows] = hooks.useStateList([])
  const { innerHeight: height } = hooks.useWindowSize()

  setTimeout(function() {
    setLoading(false)
  }, 3000)

  const columnWidths = {
    id: 300,
    text: 300,
    icon: 300,
  }
  const handleSelect = (event, data) => {
    setSelectedRows(data.id)
  }

  const handleSelectAll = (event, data) => {
    if (data.checked) {
      resetSelectedRows(map(rows, obj => obj))
    } else {
      resetSelectedRows([])
    }
  }

  return (
    <SelectionTable
      columnWidths={columnWidths}
      loading={loading}
      rows={rows}
      headerHeight={55}
      rowHeight={40}
      maxHeight={height - 400}
      onSelect={handleSelect}
      onSelectAll={handleSelectAll}
    >
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
    </SelectionTable>
  )
}

export default SelectionTableExample
