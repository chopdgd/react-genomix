import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import { LinkFixedCell } from '../index'


describe('Test LinkFixedCell', () => {
  const data = [
    { id: 0, content: 'benign' },
    { id: 1, content: 'pathogenic' },
  ]

  it('renders without crashing', () => {
    const div = document.createElement('div')
    const element = (
      <LinkFixedCell
        data={data}
        rowIndex={1}
        columnKey="content"
        urlBuilder={jest.fn()}
      />
    )
    ReactDOM.render(element, div)
  })

  it('renders the first record with rowIndex = 0', () => {
    const element = (
      <LinkFixedCell
        data={data}
        rowIndex={0}
        columnKey="content"
        urlBuilder={(data) => `http://www.google.com/${data}`}
      />
    )
    const wrapper = shallow(element)
    expect(wrapper.props().children.props.as).toEqual('a')
    expect(wrapper.props().children.props.content).toEqual('benign')
    expect(wrapper.props().children.props.href).toEqual('http://www.google.com/benign')
  })

  it('renders the second record with rowIndex = 1', () => {
    const element = (
      <LinkFixedCell
        data={data}
        rowIndex={1}
        columnKey="content"
        urlBuilder={(data) => `http://www.google.com/${data}`}
      />
    )
    const wrapper = shallow(element)
    expect(wrapper.props().children.props.as).toEqual('a')
    expect(wrapper.props().children.props.content).toEqual('pathogenic')
    expect(wrapper.props().children.props.href).toEqual('http://www.google.com/pathogenic')
  })

  it('renders the first record with rowIndex = 0, link with idKey', () => {
    const element = (
      <LinkFixedCell
        data={data}
        rowIndex={0}
        idKey="id"
        columnKey="content"
        urlBuilder={(data) => `http://www.google.com/${data}`}
      />
    )
    const wrapper = shallow(element)
    expect(wrapper.props().children.props.as).toEqual('a')
    expect(wrapper.props().children.props.content).toEqual('benign')
    expect(wrapper.props().children.props.href).toEqual('http://www.google.com/0')
  })

  it('renders the second record with rowIndex = 1, link with idKey', () => {
    const element = (
      <LinkFixedCell
        data={data}
        rowIndex={1}
        idKey="id"
        columnKey="content"
        urlBuilder={(data) => `http://www.google.com/${data}`}
      />
    )
    const wrapper = shallow(element)
    expect(wrapper.props().children.props.as).toEqual('a')
    expect(wrapper.props().children.props.content).toEqual('pathogenic')
    expect(wrapper.props().children.props.href).toEqual('http://www.google.com/1')
  })

  it('renders link with to instead of href when not an anchor', () => {
    const element = (
      <LinkFixedCell
        data={data}
        rowIndex={1}
        columnKey="content"
        as="div"
        urlBuilder={(data) => `http://www.google.com/${data}`}
      />
    )
    const wrapper = shallow(element)
    expect(wrapper.props().children.props.as).toEqual('div')
    expect(wrapper.props().children.props.content).toEqual('pathogenic')
    expect(wrapper.props().children.props.to).toEqual('http://www.google.com/pathogenic')
  })
})
