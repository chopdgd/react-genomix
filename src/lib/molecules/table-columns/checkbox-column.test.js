import React from 'react'
import { shallow } from 'enzyme'

import { CheckboxCell } from 'LibIndex'
import CheckboxColumn from './checkbox-column'


describe('Test CheckboxColumn', () => {
  it('cellDataGetter returns expected content', () => {
    const rowData = { name: 'mike', 'value': '1' }
    const dataKey = 'name'
    const element = (
      <CheckboxColumn
        label="test"
        dataKey={dataKey}
        width={100}
        onChange={jest.fn()}
      />
    )
    const wrapper = shallow(element)
    expect(wrapper.find('Column').props().cellDataGetter({ rowData, dataKey }))
      .toEqual('mike')
  })

  it('cellRenderer returns expected content', () => {
    const cellData = 'mike'
    const rowIndex = 1
    const onChange = jest.fn()
    const element = (
      <CheckboxColumn
        label="test"
        dataKey="test"
        width={100}
        onChange={onChange}
      />
    )
    const wrapper = shallow(element)
    expect(wrapper.find('Column').props().cellRenderer({ cellData, rowIndex }))
      .toEqual(<CheckboxCell as="div" onChange={onChange} content="mike" rowIndex={1} />)
  })

  it('headerRenderer returns expected content', () => {
    const label = 'Mike Column'
    const element = (
      <CheckboxColumn
        label={label}
        dataKey="test"
        width={100}
        onChange={jest.fn()}
      />
    )
    const wrapper = shallow(element)
    expect(wrapper.find('Column').props().headerRenderer({label }))
      .toEqual(<p>Mike Column</p>)
  })
})
