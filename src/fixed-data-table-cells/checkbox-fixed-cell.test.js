import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import { CheckboxFixedCell } from '../index'

describe('Test CheckboxFixedCell', () => {
  const data = [{ checkbox: 1 }, { checkbox: 2 }]

  const checked = [1]

  it('renders without crashing', () => {
    const div = document.createElement('div')
    const element = (
      <CheckboxFixedCell data={data} rowIndex={1} columnKey="checkbox" onChange={jest.fn()} checked={checked} />
    )
    ReactDOM.render(element, div)
  })

  it('renders the first record date with rowIndex = 0', () => {
    const element = (
      <CheckboxFixedCell data={data} rowIndex={0} columnKey="checkbox" onChange={jest.fn()} checked={checked} />
    )
    const wrapper = shallow(element)
    expect(wrapper.find('Checkbox').props().checked).toEqual(true)
  })

  it('renders the second record date with rowIndex = 1', () => {
    const element = (
      <CheckboxFixedCell data={data} rowIndex={1} columnKey="checkbox" onChange={jest.fn()} checked={checked} />
    )
    const wrapper = shallow(element)
    expect(wrapper.find('Checkbox').props().checked).toEqual(false)
  })

  it('when checkbox changes, value is retrieved from data', () => {
    const onChange = jest.fn()
    const element = (
      <CheckboxFixedCell data={data} rowIndex={0} columnKey="checkbox" onChange={onChange} checked={checked} />
    )
    const wrapper = shallow(element)
    const observerd = wrapper.find('Checkbox').props().onChange
    expect(observerd).toEqual(onChange)
  })
})
