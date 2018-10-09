import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import { DropdownCell } from '../../index'


describe('Test DropdownCell', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    const table = (
      <DropdownCell
        name="test"
        rowIndex={1}
        onChange={jest.fn()}
        options={[{ key: 'key2', value: 2, text: '2'}]}
      />
    )
    ReactDOM.render(table, div)
  })

  it('initial props are set correctly', () => {
    const component = (
      <DropdownCell
        name="test"
        rowIndex={1}
        onChange={jest.fn()}
        options={[{ key: 'key2', value: 2, text: '2'}]}
      />
    )
    const wrapper = shallow(component)
    expect(wrapper.instance().props.name).toEqual('test')
    expect(wrapper.instance().props.rowIndex).toEqual(1)
    expect(wrapper.instance().props.dropDownProps)
      .toEqual({ fluid: false, multiple: false, selection: true, search: true })
    expect(wrapper.instance().props.options)
      .toEqual([{ key: 'key2', value: 2, text: '2'}])
  })

  it('initial props are set correctly as td', () => {
    const component = (
      <DropdownCell
        as="td"
        name="test"
        rowIndex={1}
        onChange={jest.fn()}
        options={[{ key: 'key2', value: 2, text: '2'}]}
      />
    )
    const wrapper = shallow(component)
    expect(wrapper.instance().props.as).toEqual('td')
    expect(wrapper.instance().props.name).toEqual('test')
    expect(wrapper.instance().props.rowIndex).toEqual(1)
    expect(wrapper.instance().props.dropDownProps)
      .toEqual({ fluid: false, multiple: false, selection: true, search: true })
    expect(wrapper.instance().props.options)
      .toEqual([{ key: 'key2', value: 2, text: '2'}])
  })

  it('onChange is called correctly', () => {
    const onChange = jest.fn()
    const event = { target: { name: "test", value: 2 }}
    const component = (
      <DropdownCell
        name="test"
        rowIndex={1}
        onChange={onChange}
        options={[{ key: 'key2', value: 2, text: '2'}]}
      />
    )
    const wrapper = shallow(component)
    wrapper.find('Dropdown').simulate('change', event, { name: "test", value: 2 })
    expect(onChange).toHaveBeenCalledWith({"column": "test", "row": 1, "value": 2})
  })
})
