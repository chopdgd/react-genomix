import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import LinkCell from './link-cell'


describe('Test LinkCell', () => {
  it('LinkCell renders without crashing', () => {
    const div = document.createElement('div')
    const component = (
      <LinkCell
        path="http://www.google.com"
        content="hi"
        rowIndex={1}
      />
    )
    ReactDOM.render(component, div)
  })

  it('TextCell initial props are set correctly', () => {
    const component = (
      <LinkCell
        path="http://www.google.com"
        content="hi"
        rowIndex={1}
      />
    )
    const wrapper = shallow(component)
    expect(wrapper.instance().props.as).toEqual('div')
    expect(wrapper.instance().props.path).toEqual('http://www.google.com')
    expect(wrapper.instance().props.content).toEqual('hi')
    expect(wrapper.instance().props.rowIndex).toEqual(1)
  })

  it('LinkCell initial props are set correctly as td', () => {
    const component = (
      <LinkCell
        as="td"
        path="http://www.google.com"
        content="hi"
        rowIndex={1}
      />
    )
    const wrapper = shallow(component)
    expect(wrapper.instance().props.as).toEqual('td')
    expect(wrapper.instance().props.path).toEqual('http://www.google.com')
    expect(wrapper.instance().props.content).toEqual('hi')
    expect(wrapper.instance().props.rowIndex).toEqual(1)
  })

  it('LinkCell link url is set correctly', () => {
    const component = (
      <LinkCell
        path="app/1"
        content="hi"
        rowIndex={1}
      />
    )
    const wrapper = shallow(component)
    expect(wrapper.find('a').prop('href')).toEqual('app/1')
    expect(wrapper.find('a').prop('target')).toEqual('_blank')
    expect(wrapper.find('a').prop('rel')).toEqual('noopener noreferrer')
  })

  it('LinkCell link can use React-Router', () => {
    const Link = ({ ...props }) => <p>{props.to}</p>

    const component = (
      <LinkCell
        linkAs={Link}
        path="app/1"
        content="hi"
        rowIndex={1}
      />
    )
    const wrapper = shallow(component)
    expect(wrapper.instance().props.linkAs).toEqual(Link)
    expect(wrapper.find('linkAs').prop('to')).toEqual('app/1')
  })
})
