import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import { DropdownFixedCell } from 'LibIndex'


describe('Test DropdownFixedCell', () => {
  const data = [
    { dropdown: undefined },
    { dropdown: 1 },
  ]

  const options = [
    { key: 1, value: 1, text: 1}
  ]

  it('renders without crashing', () => {
    const div = document.createElement('div')
    const element = (
      <DropdownFixedCell
        data={data}
        rowIndex={1}
        columnKey="checkbox"
        onChange={jest.fn()}
        options={options}
      />
    )
    ReactDOM.render(element, div)
  })

  it('renders the first record with rowIndex = 0', () => {
    const element = (
      <DropdownFixedCell
        data={data}
        rowIndex={0}
        columnKey="dropdown"
        onChange={jest.fn()}
        options={options}
      />
    )
    const wrapper = shallow(element)
    expect(wrapper.find('Dropdown').props().value).toEqual(undefined)
  })

  it('renders the second record with rowIndex = 1', () => {
    const element = (
      <DropdownFixedCell
        data={data}
        rowIndex={1}
        columnKey="dropdown"
        onChange={jest.fn()}
        options={options}
      />
    )
    const wrapper = shallow(element)
    expect(wrapper.find('Dropdown').props().value).toEqual(1)
  })

  it('when checkbox changes, it calls onChange prop with rowIndex', () => {
    const onChange = jest.fn()
    const element = (
      <DropdownFixedCell
        data={data}
        rowIndex={1}
        columnKey="dropdown"
        onChange={onChange}
        options={options}
      />
    )
    const wrapper = shallow(element)
    wrapper.find('Dropdown').simulate('change')
    expect(onChange).toHaveBeenCalledWith({column: "dropdown", row: 1, value: 1})
  })
})
