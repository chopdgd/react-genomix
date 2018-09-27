import React from 'react'
import { shallow } from 'enzyme'

import { StatusCell, StatusColumn } from '../../index'


describe('Test StatusColumn', () => {
  it('cellDataGetter returns expected content', () => {
    const rowData = { status: 'pending' }
    const dataKey = 'status'
    const element = (
      <StatusColumn
        label="test"
        dataKey={dataKey}
        width={100}
      />
    )
    const wrapper = shallow(element)
    expect(wrapper.find('Column').props().cellDataGetter({ rowData, dataKey }))
      .toEqual('pending')
  })


  it('cellRenderer returns expected content', () => {
    const cellData = 'pending'
    const rowIndex = 1
    const element = (
      <StatusColumn
        label="test"
        dataKey="test"
        width={100}
      />
    )
    const wrapper = shallow(element)
    expect(wrapper.find('Column').props().cellRenderer({ cellData, rowIndex }))
      .toEqual(<StatusCell as="div" status="pending" rowIndex={1} />)
  })

  it('headerRenderer returns expected content', () => {
    const label = 'Header Column'
    const element = (
      <StatusColumn
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
