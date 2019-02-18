import React from 'react'
import { shallow } from 'enzyme'

import { InterpretationCell, InterpretationColumn } from '../index'


describe('Test InterpretationColumn', () => {
  it('cellDataGetter returns expected content', () => {
    const rowData = { interpretation: 'benign' }
    const dataKey = 'interpretation'
    const element = (
      <InterpretationColumn
        label="test"
        dataKey={dataKey}
        width={100}
      />
    )
    const wrapper = shallow(element)
    expect(wrapper.find('Column').props().cellDataGetter({ rowData, dataKey }))
      .toEqual('benign')
  })


  it('cellRenderer returns expected content', () => {
    const cellData = 'benign'
    const rowIndex = 1
    const element = (
      <InterpretationColumn
        label="test"
        dataKey="test"
        width={100}
      />
    )
    const wrapper = shallow(element)
    expect(wrapper.find('Column').props().cellRenderer({ cellData, rowIndex }))
      .toEqual(<InterpretationCell as="div" classification="benign" rowIndex={1} />)
  })

  it('headerRenderer returns expected content', () => {
    const label = 'Header Column'
    const element = (
      <InterpretationColumn
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
