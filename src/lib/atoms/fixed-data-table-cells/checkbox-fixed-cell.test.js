import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import { CheckboxFixedCell } from 'LibIndex'


describe('Test CheckboxFixedCell', () => {
  const data = [
    { checkbox: false },
    { checkbox: true },
  ]

  it('renders without crashing', () => {
    const div = document.createElement('div')
    const element = (
      <CheckboxFixedCell
        data={data}
        rowIndex={1}
        columnKey="checkbox"
        onChange={jest.fn()}
      />
    )
    ReactDOM.render(element, div)
  })

  it('renders the first record date with rowIndex = 0', () => {
    const element = (
      <CheckboxFixedCell
        data={data}
        rowIndex={0}
        columnKey="checkbox"
        onChange={jest.fn()}
      />
    )
    const wrapper = shallow(element)
    expect(wrapper.find('Checkbox').props().defaultChecked).toEqual(false)
  })

  it('renders the second record date with rowIndex = 1', () => {
    const element = (
      <CheckboxFixedCell
        data={data}
        rowIndex={1}
        columnKey="checkbox"
        onChange={jest.fn()}
      />
    )
    const wrapper = shallow(element)
    expect(wrapper.find('Checkbox').props().defaultChecked).toEqual(true)
  })

  it('when checkbox changes, value is retrieved from data', () => {
    const onChange = jest.fn()
    const element = (
      <CheckboxFixedCell
        data={data}
        rowIndex={0}
        columnKey="checkbox"
        onChange={onChange}
      />
    )
    const wrapper = shallow(element)
    expect(wrapper.instance().state.checked).toEqual(false)
    wrapper.find('Checkbox').simulate('change')
    expect(onChange).toHaveBeenCalledWith(0)
    expect(wrapper.instance().state.checked).toEqual(false)
  })
})
