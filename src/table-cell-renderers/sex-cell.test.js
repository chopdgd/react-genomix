import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import { SexCell } from './sex-cell'

describe('SexCell List', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<SexCell cellData="male" />, div)
  })

  it('test value of male', () => {
    const wrapper = shallow(<SexCell cellData="male" />)
    expect(wrapper.props().color).toEqual('blue')
    expect(wrapper.props().name).toEqual('male')
  })

  it('test value of m', () => {
    const wrapper = shallow(<SexCell cellData="m" />)
    expect(wrapper.props().color).toEqual('blue')
    expect(wrapper.props().name).toEqual('male')
  })

  it('test value of female', () => {
    const wrapper = shallow(<SexCell cellData="female" />)
    expect(wrapper.props().color).toEqual('pink')
    expect(wrapper.props().name).toEqual('female')
  })

  it('test value of f', () => {
    const wrapper = shallow(<SexCell cellData="f" />)
    expect(wrapper.props().color).toEqual('pink')
    expect(wrapper.props().name).toEqual('female')
  })

  it('test value of x', () => {
    const wrapper = shallow(<SexCell cellData="x" />)
    expect(wrapper.props().color).toEqual('black')
    expect(wrapper.props().name).toEqual('question circle outline')
  })
})
