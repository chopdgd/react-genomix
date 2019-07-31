import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import { StatusCell } from './status-cell'

describe('StatusCell List', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<StatusCell cellData="running" />, div)
  })

  it('test value of running', () => {
    const wrapper = shallow(<StatusCell cellData="running" />)
    expect(wrapper.find('Label').props().color).toEqual('blue')
    expect(wrapper.find('Label').props().icon).toEqual('hourglass start')
  })

  it('test value of pending', () => {
    const wrapper = shallow(<StatusCell cellData="pending" />)
    expect(wrapper.find('Label').props().color).toEqual('yellow')
    expect(wrapper.find('Label').props().icon).toEqual('clock outline')
  })

  it('test value of completed', () => {
    const wrapper = shallow(<StatusCell cellData="completed" />)
    expect(wrapper.find('Label').props().color).toEqual('green')
    expect(wrapper.find('Label').props().icon).toEqual('checkmark')
  })

  it('test value of failed', () => {
    const wrapper = shallow(<StatusCell cellData="failed" />)
    expect(wrapper.find('Label').props().color).toEqual('red')
    expect(wrapper.find('Label').props().icon).toEqual('x')
  })
})
