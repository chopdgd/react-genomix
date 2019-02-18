import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import { StatusFixedCell } from '../index'


describe('Test StatusFixedCell', () => {
  const data = [
    { status: 'pending' },
    { status: 'running' },
    { status: 'complete' },
    { status: 'cancelled' },
    { status: 'failed' },
    { status: 'asdf' },
  ]

  it('renders without crashing', () => {
    const div = document.createElement('div')
    const element = (
      <StatusFixedCell
        data={data}
        rowIndex={1}
        columnKey="status"
      />
    )
    ReactDOM.render(element, div)
  })

  it('renders the pending status icon', () => {
    const element = (
      <StatusFixedCell
        data={data}
        rowIndex={0}
        columnKey="status"
      />
    )
    const wrapper = shallow(element)
    expect(wrapper.props().children.props.color).toEqual('grey')
    expect(wrapper.props().children.props.name).toEqual('clock')
  })

  it('renders the running status icon', () => {
    const element = (
      <StatusFixedCell
        data={data}
        rowIndex={1}
        columnKey="status"
      />
    )
    const wrapper = shallow(element)
    expect(wrapper.props().children.props.color).toEqual('black')
    expect(wrapper.props().children.props.name).toEqual('spinner')
  })

  it('renders the complete status icon', () => {
    const element = (
      <StatusFixedCell
        data={data}
        rowIndex={2}
        columnKey="status"
      />
    )
    const wrapper = shallow(element)
    expect(wrapper.props().children.props.color).toEqual('green')
    expect(wrapper.props().children.props.name).toEqual('checkmark')
  })

  it('renders the cancelled status icon', () => {
    const element = (
      <StatusFixedCell
        data={data}
        rowIndex={3}
        columnKey="status"
      />
    )
    const wrapper = shallow(element)
    expect(wrapper.props().children.props.color).toEqual('red')
    expect(wrapper.props().children.props.name).toEqual('dont')
  })

  it('renders failed status icon', () => {
    const element = (
      <StatusFixedCell
        data={data}
        rowIndex={4}
        columnKey="status"
      />
    )
    const wrapper = shallow(element)
    expect(wrapper.props().children.props.color).toEqual('red')
    expect(wrapper.props().children.props.name).toEqual('x')
  })

  it('renders the unknown status icon', () => {
    const element = (
      <StatusFixedCell
        data={data}
        rowIndex={5}
        columnKey="status"
      />
    )
    const wrapper = shallow(element)
    expect(wrapper.props().children.props.color).toEqual('grey')
    expect(wrapper.props().children.props.name).toEqual('question')
  })
})
