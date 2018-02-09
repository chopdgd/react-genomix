import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import { Link } from 'LibIndex'


describe('Test Link', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Link as="a" content="google" href="https://www.google.com" />, div)
  })

  it('props are spread correctly', () => {
    const href = 'https://www.google.com'
    const content = 'google'
    const wrapper = shallow(<Link as="a" content={content} href={href} />)
    expect(wrapper.find('a').props().href).toEqual(href)
  })

  it('anchor props include target and rel', () => {
    const href = 'https://www.google.com'
    const content = 'google'
    const wrapper = shallow(<Link as="a" content={content} href={href} />)
    expect(wrapper.find('a').props().href).toEqual(href)
    expect(wrapper.find('a').props().target).toEqual('_blank')
    expect(wrapper.find('a').props().rel).toEqual('noopener noreferrer')
  })

  it('non anchor props do not include target and rel', () => {
    const content = 'google'
    const wrapper = shallow(<Link as="p" content={content} />)
    expect(wrapper.find('p').props().target).toEqual(undefined)
    expect(wrapper.find('p').props().rel).toEqual(undefined)
  })
})
