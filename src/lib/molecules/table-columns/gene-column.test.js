import React from 'react'
import { shallow } from 'enzyme'

import { GeneCell, GeneColumn } from 'LibIndex'


describe('Test GeneColumn', () => {
  it('cellDataGetter returns expected content', () => {
    const rowData = { gene: [{symbol: 'PNPLA6'}] }
    const dataKey = 'gene'
    const element = (
      <GeneColumn
        label="test"
        dataKey={dataKey}
        width={100}
      />
    )
    const wrapper = shallow(element)
    expect(wrapper.find('Column').props().cellDataGetter({ rowData, dataKey }))
      .toEqual([{symbol: 'PNPLA6'}])
  })


  it('cellRenderer returns expected content', () => {
    const cellData = [{symbol: 'PNPLA6'}]
    const rowIndex = 1
    const element = (
      <GeneColumn
        label="test"
        dataKey="test"
        width={100}
      />
    )
    const wrapper = shallow(element)
    expect(wrapper.find('Column').props().cellRenderer({ cellData, rowIndex }))
      .toEqual(<GeneCell as="div" genes={[{symbol: 'PNPLA6'}]} rowIndex={1} />)
  })

  it('headerRenderer returns expected content', () => {
    const label = 'Header Column'
    const element = (
      <GeneColumn
        label={label}
        dataKey="test"
        width={100}
      />
    )
    const wrapper = shallow(element)
    expect(wrapper.find('Column').props().headerRenderer({label }))
      .toEqual(<p>Header Column</p>)
  })
})
