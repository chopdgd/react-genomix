import React from 'react'
import ReactDOM from 'react-dom'
import { mount, shallow } from 'enzyme'

import { LinkCell } from 'LibIndex'


describe('Test LinkCell', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    const component = (
      <LinkCell
        href="http://www.google.com"
        content="hi"
        rowIndex={1}
      />
    )
    ReactDOM.render(component, div)
  })

  it('initial props are set correctly', () => {
    const component = (
      <LinkCell
        href="http://www.google.com"
        content="hi"
      />
    )
    const wrapper = shallow(component)
    expect(wrapper.instance().props.as).toEqual('div')
    expect(wrapper.instance().props.rowIndex).toEqual(undefined)
    expect(wrapper.instance().props.content).toEqual('hi')
    expect(wrapper.instance().props.linkAs).toEqual('a')
    expect(wrapper.instance().props.href).toEqual('http://www.google.com')
  })

  it('props are spread correctly', () => {
    const component = (
      <LinkCell
        linkAs="p"
        href="app/1"
        content="hi"
        rowIndex={1}
      />
    )
    const wrapper = mount(component)
    expect(wrapper.find('Link').props().as).toEqual('p')
    expect(wrapper.find('Link').props().href).toEqual('app/1')
    expect(wrapper.find('Link').props().content).toEqual('hi')
  })
})
