import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import { CheckboxCell } from './checkbox-cell'

describe('CheckboxCell List', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<CheckboxCell cellData={10000000} rest={{ headerIndex: 0 }} />, div)
  })

  it('This is a header renders Icon', () => {
    const onSelect = jest.fn()
    const onSelectAll = jest.fn()
    const node = <CheckboxCell column={{ onSelect, onSelectAll }} cellData={1} headerIndex={0} />
    const wrapper = shallow(node)
    expect(wrapper.find('Icon')).toHaveLength(1)
    wrapper.find('Icon').simulate('click', {})
    expect(onSelectAll).toHaveBeenCalledTimes(1)
    expect(onSelect).toHaveBeenCalledTimes(0)
  })

  it('This is not a header renders Checkbox', () => {
    const onSelect = jest.fn()
    const onSelectAll = jest.fn()
    const node = <CheckboxCell column={{ onSelect, onSelectAll }} cellData={1} />
    const wrapper = shallow(node)
    expect(wrapper.find('Checkbox')).toHaveLength(1)
    wrapper.find('Checkbox').simulate('change', {}, {})
    expect(onSelectAll).toHaveBeenCalledTimes(0)
    expect(onSelect).toHaveBeenCalledTimes(1)
  })
})
