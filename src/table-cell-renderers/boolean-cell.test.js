import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import { BooleanCell } from './boolean-cell'

describe('BooleanCell List', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BooleanCell cellData={true} />, div)
  })

  it('test value of true', () => {
    const node = <BooleanCell cellData={true} />
    const wrapper = shallow(node)
    expect(wrapper.props().color).toEqual('green')
    expect(wrapper.props().name).toEqual('checkmark')
  })

  it('test value of yes', () => {
    const node = <BooleanCell cellData="yes" />
    const wrapper = shallow(node)
    expect(wrapper.props().color).toEqual('green')
    expect(wrapper.props().name).toEqual('checkmark')
  })

  it('test value of y', () => {
    const node = <BooleanCell cellData="y" />
    const wrapper = shallow(node)
    expect(wrapper.props().color).toEqual('green')
    expect(wrapper.props().name).toEqual('checkmark')
  })

  it('test value of false', () => {
    const node = <BooleanCell cellData={false} />
    const wrapper = shallow(node)
    expect(wrapper.props().color).toEqual('red')
    expect(wrapper.props().name).toEqual('x')
  })

  it('test value of no', () => {
    const node = <BooleanCell cellData="no" />
    const wrapper = shallow(node)
    expect(wrapper.props().color).toEqual('red')
    expect(wrapper.props().name).toEqual('x')
  })

  it('test value of n', () => {
    const node = <BooleanCell cellData="n" />
    const wrapper = shallow(node)
    expect(wrapper.props().color).toEqual('red')
    expect(wrapper.props().name).toEqual('x')
  })

  it('test value of n', () => {
    const node = <BooleanCell cellData="xafd" />
    const wrapper = shallow(node)
    expect(wrapper.props().color).toEqual('black')
    expect(wrapper.props().name).toEqual('question circle outline')
  })
})
