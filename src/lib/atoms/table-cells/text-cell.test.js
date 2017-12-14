import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import TextCell from './text-cell'


describe('Test TextCell', () => {
  it('TextCell renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<TextCell rowIndex={1} content="hi" />, div)
  })

  it('TextCell initial props are set correctly', () => {
    const wrapper = shallow(<TextCell rowIndex={1} content="hi" />)
    expect(wrapper.instance().props.rowIndex).toEqual(1)
    expect(wrapper.instance().props.as).toEqual('div')
    expect(wrapper.instance().props.content).toEqual('hi')
  })

  it('TextCell initial props are set correctly as td', () => {
    const wrapper = shallow(<TextCell as="td" rowIndex={1} content="hi" />)
    expect(wrapper.instance().props.rowIndex).toEqual(1)
    expect(wrapper.instance().props.as).toEqual('td')
    expect(wrapper.instance().props.content).toEqual('hi')
  })
})
