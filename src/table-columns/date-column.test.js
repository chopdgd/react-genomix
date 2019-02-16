import React from 'react'
import { shallow } from 'enzyme'

import { DateCell, DateColumn } from '../index'


describe('Test DateColumn', () => {
  it('cellDataGetter returns expected content', () => {
    const rowData = { date: '1987-12-18' }
    const dataKey = 'date'
    const element = (
      <DateColumn
        label="test"
        dataKey={dataKey}
        width={100}
      />
    )
    const wrapper = shallow(element)
    expect(wrapper.find('Column').props().cellDataGetter({ rowData, dataKey }))
      .toEqual('1987-12-18')
  })


  it('cellRenderer returns expected content', () => {
    const cellData = '1987-12-18'
    const rowIndex = 1
    const columnData = { format: 'YYYYDDMM' }
    const element = (
      <DateColumn
        label="test"
        dataKey="test"
        width={100}
        columnData={columnData}
      />
    )
    const wrapper = shallow(element)
    expect(wrapper.find('Column').props().cellRenderer({ cellData, columnData, rowIndex }))
      .toEqual(<DateCell as="div" date="1987-12-18" format="YYYYDDMM" rowIndex={1} />)
  })

  it('headerRenderer returns expected content', () => {
    const label = 'Header Column'
    const element = (
      <DateColumn
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
