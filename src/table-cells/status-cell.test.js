import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import { StatusCell } from '../index'


describe('Test StatusCell', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<StatusCell status="unknown" />, div)
  })

  it('Pending status renders correct Icon', () => {
    const wrapper = shallow(<StatusCell status="pending" />)
    expect(wrapper.find('Icon').props().name).toEqual('clock')
    expect(wrapper.find('Icon').props().color).toEqual('grey')
  })

  it('Running status renders correct Icon', () => {
    const wrapper = shallow(<StatusCell status="running" />)
    expect(wrapper.find('Icon').props().name).toEqual('spinner')
    expect(wrapper.find('Icon').props().color).toEqual('black')
  })

  it('Complete status renders correct Icon', () => {
    const wrapper = shallow(<StatusCell status="complete" />)
    expect(wrapper.find('Icon').props().name).toEqual('checkmark')
    expect(wrapper.find('Icon').props().color).toEqual('green')
  })

  it('Cancelled status renders correct Icon', () => {
    const wrapper = shallow(<StatusCell status="cancelled" />)
    expect(wrapper.find('Icon').props().name).toEqual('dont')
    expect(wrapper.find('Icon').props().color).toEqual('red')
  })

  it('Failed status renders correct Icon', () => {
    const wrapper = shallow(<StatusCell status="failed" />)
    expect(wrapper.find('Icon').props().name).toEqual('x')
    expect(wrapper.find('Icon').props().color).toEqual('red')
  })

  it('Unknown status renders correct Icon', () => {
    const wrapper = shallow(<StatusCell status="unknown" />)
    expect(wrapper.find('Icon').props().name).toEqual('question')
    expect(wrapper.find('Icon').props().color).toEqual('grey')
  })
})
