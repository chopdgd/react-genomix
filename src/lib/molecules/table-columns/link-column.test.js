import React from 'react'
import { shallow } from 'enzyme'

import { LinkCell } from 'LibIndex'
import LinkColumn from './link-column'


describe('Test LinkColumn', () => {
  it('cellDataGetter returns expected content', () => {
    const rowData = { name: 'mike', 'value': '1' }
    const dataKey = 'name'
    const element = (
      <LinkColumn
        label="test"
        dataKey={dataKey}
        width={100}
        linkAs="a"
        path="http://www.google.com"
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
      <LinkColumn
        label="test"
        dataKey="test"
        width={100}
        linkAs="a"
        path="http://www.google.com"
      />
    )
    const wrapper = shallow(element)
    expect(wrapper.find('Column').props().cellRenderer({ cellData, rowIndex }))
      .toEqual(<LinkCell as="div" linkAs="a" path="http://www.google.com" content="mike" rowIndex={1} />)
  })

  it('headerRenderer returns expected content', () => {
    const label = 'Mike Column'
    const element = (
      <LinkColumn
        label={label}
        dataKey="test"
        width={100}
        linkAs="a"
        path="http://www.google.com"
      />
    )
    const wrapper = shallow(element)
    expect(wrapper.find('Column').props().headerRenderer({label }))
      .toEqual(<p>Mike Column</p>)
  })
})
