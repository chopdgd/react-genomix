import React from 'react'
import { shallow } from 'enzyme'

import { DropdownCell, DropdownColumn } from 'LibIndex'


describe('Test DropdownColumn', () => {
  it('cellDataGetter returns expected content', () => {
    const rowData = { name: 'mike', 'value': '1' }
    const dataKey = 'name'
    const element = (
      <DropdownColumn
        label="test"
        dataKey={dataKey}
        width={100}
        columnData={{
          options: [{ key: 'key2', value: 2, text: '2'}],
          onChange: jest.fn(),
        }}
      />
    )
    const wrapper = shallow(element)
    expect(wrapper.find('Column').props().cellDataGetter({ rowData, dataKey }))
      .toEqual('mike')
  })

  it('cellRenderer returns expected content', () => {
    const cellData = 'mike'
    const dataKey = 'test'
    const rowIndex = 1
    const onChange = jest.fn()
    const columnData = {
      options: [{ key: 'key2', value: 2, text: '2'}],
      onChange: onChange,
    }
    const element = (
      <DropdownColumn
        label="test"
        dataKey={dataKey}
        width={100}
        columnData={columnData}
      />
    )
    const wrapper = shallow(element)
    const cellElement = (
      <DropdownCell
        as="div"
        name="test"
        onChange={onChange}
        options={[{ key: 'key2', value: 2, text: '2'}]}
        content="mike"
        rowIndex={1}
        dropDownProps={{
          fluid: false,
          multiple: false,
          selection: true,
          search: true,
        }}
      />
    )
    expect(wrapper.find('Column').props().cellRenderer({ dataKey, columnData, cellData, rowIndex }))
      .toEqual(cellElement)
  })

  it('headerRenderer returns expected content', () => {
    const label = 'Mike Column'
    const element = (
      <DropdownColumn
        label="test"
        dataKey="test"
        width={100}
        columnData={{
          options: [{ key: 'key2', value: 2, text: '2'}],
          onChange: jest.fn(),
        }}
      />
    )
    const wrapper = shallow(element)
    expect(wrapper.find('Column').props().headerRenderer({label }))
      .toEqual(<p>Mike Column</p>)
  })
})
