import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import { CheckboxCell } from 'LibIndex'


describe('Test CheckboxCell', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<CheckboxCell rowIndex={1} onChange={jest.fn()} />, div)
  })

  it('checked is false when rowIndex not in checked', () => {
    const wrapper = shallow(<CheckboxCell rowIndex={1} onChange={jest.fn()} />)
    expect(wrapper.find('Checkbox').props().checked).toEqual(false)
  })

  it('checked is true when rowIndex in checked', () => {
    const wrapper = shallow(<CheckboxCell rowIndex={1} checked={[1]} onChange={jest.fn()} />)
    expect(wrapper.find('Checkbox').props().checked).toEqual(true)
  })
})
