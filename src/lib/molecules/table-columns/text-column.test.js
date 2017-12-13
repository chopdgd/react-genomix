import React from 'react'
import { shallow } from 'enzyme'

import { TextCell } from 'LibIndex'
import TextColumn from './text-column'


describe('Test TextColumn', () => {
  it('cellDataGetter returns expected content', () => {
    const rowData = { name: 'mike', 'value': '1' }
    const dataKey = 'name'
    const element = (
      <TextColumn
        label="test"
        dataKey={dataKey}
        width={100}
      />
    )
    const wrapper = shallow(element)
    expect(wrapper.find('Column').props().cellDataGetter({ rowData, dataKey }))
      .toEqual('mike')
  })


  it('cellRenderer returns expected content', () => {
    const cellData = 'mike'
    const rowIndex = 1
    const element = (
      <TextColumn
        label="test"
        dataKey="test"
        width={100}
      />
    )
    const wrapper = shallow(element)
    expect(wrapper.find('Column').props().cellRenderer({ cellData, rowIndex }))
      .toEqual(<TextCell as="div" content="mike" rowIndex={1} />)
  })

  it('headerRenderer returns expected content', () => {
    const label = 'Mike Column'
    const element = (
      <TextColumn
        label={label}
        dataKey="test"
        width={100}
      />
    )
    const wrapper = shallow(element)
    expect(wrapper.find('Column').props().headerRenderer({label }))
      .toEqual(<p>Mike Column</p>)
  })
})
