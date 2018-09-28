import React from 'react'
import { shallow } from 'enzyme'

import { LinkCell, LinkColumn } from '../../index'


describe('Test LinkColumn', () => {
  it('cellDataGetter returns expected content', () => {
    const rowData = { name: 'mike', 'value': '1' }
    const dataKey = 'name'
    const urlBuilder = jest.fn()
    const element = (
      <LinkColumn
        label="test"
        dataKey={dataKey}
        width={100}
        columnData={{ urlBuilder }}
      />
    )
    const wrapper = shallow(element)
    expect(wrapper.find('Column').props().cellDataGetter({ rowData, dataKey }))
      .toEqual('mike')
  })

  it('cellRenderer returns expected content', () => {
    const cellData = 'mike'
    const rowIndex = 1
    const urlBuilder = (cellData) => `http://example.com/${cellData}`
    const columnData = { as: 'a', urlBuilder }
    const element = (
      <LinkColumn
        label="test"
        dataKey="test"
        width={100}
        columnData={columnData}
      />
    )
    const wrapper = shallow(element)
    expect(wrapper.find('Column').props().cellRenderer({ columnData, cellData, rowIndex }))
      .toEqual(<LinkCell as="div" linkAs="a" href="http://example.com/mike" content="mike" rowIndex={1} />)
  })

  it('cellRenderer returns expected content', () => {
    const cellData = 'mike'
    const rowIndex = 1
    const urlBuilder = (cellData) => `http://example.com/${cellData}`
    const columnData = { urlBuilder }
    const element = (
      <LinkColumn
        label="test"
        dataKey="test"
        width={100}
        columnData={columnData}
      />
    )
    const wrapper = shallow(element)
    expect(wrapper.find('Column').props().cellRenderer({ columnData, cellData, rowIndex }))
      .toEqual(<LinkCell as="div" linkAs="a" to="http://example.com/mike" content="mike" rowIndex={1} />)
  })

  it('urlBuilder is called when cellRenderer is fired' , () => {
    const cellData = 'mike'
    const rowIndex = 1
    const urlBuilder = jest.fn()
    urlBuilder.mockReturnValue('http://example.com/mike')
    const columnData = { urlBuilder }
    const element = (
      <LinkColumn
        label="test"
        dataKey="test"
        width={100}
        columnData={columnData}
      />
    )
    const wrapper = shallow(element)
    wrapper.find('Column').props().cellRenderer({ columnData, cellData, rowIndex })
    expect(urlBuilder).toHaveBeenCalledWith(cellData)
  })

  it('headerRenderer returns expected content', () => {
    const label = 'Mike Column'
    const urlBuilder = (cellData) => `http://example.com/${cellData}`
    const element = (
      <LinkColumn
        label={label}
        dataKey="test"
        width={100}
        columnData={{ urlBuilder }}
      />
    )
    const wrapper = shallow(element)
    expect(wrapper.find('Column').props().headerRenderer({label }))
      .toEqual(<p>Mike Column</p>)
  })
})
