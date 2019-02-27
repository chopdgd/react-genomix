import React from 'react'
import { shallow } from 'enzyme'

import { CheckboxCell, CheckboxColumn } from '../index'

describe('Test CheckboxColumn', () => {
  it('cellDataGetter returns expected content', () => {
    const rowData = { name: 'mike', value: '1' }
    const dataKey = 'name'
    const element = (
      <CheckboxColumn
        label="test"
        dataKey={dataKey}
        width={100}
        columnData={{
          onChange: jest.fn(),
          checked: [],
        }}
      />
    )
    const wrapper = shallow(element)
    expect(
      wrapper
        .find('Column')
        .props()
        .cellDataGetter({ rowData, dataKey })
    ).toEqual('mike')
  })

  it('cellRenderer returns expected content', () => {
    const cellData = 'mike'
    const dataKey = 'name'
    const rowIndex = 1
    const onChange = jest.fn()
    const columnData = { onChange: onChange, checked: [1] }
    const element = <CheckboxColumn label="test" dataKey={dataKey} width={100} columnData={columnData} />
    const wrapper = shallow(element)
    expect(
      wrapper
        .find('Column')
        .props()
        .cellRenderer({ dataKey, columnData, cellData, rowIndex })
    ).toEqual(<CheckboxCell as="div" onChange={onChange} rowIndex={1} checked={[1]} />)
  })

  it('headerRenderer returns expected content', () => {
    const label = 'Mike Column'
    const element = (
      <CheckboxColumn label={label} dataKey="test" width={100} columnData={{ onChange: jest.fn(), checked: [] }} />
    )
    const wrapper = shallow(element)
    expect(
      wrapper
        .find('Column')
        .props()
        .headerRenderer({ label })
    ).toEqual(<p>Mike Column</p>)
  })
})
