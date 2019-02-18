import React from 'react'
import ReactDOM from 'react-dom'
import { mount, shallow } from 'enzyme'

import { Avatar } from '../index'


describe('Test Avatar', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Avatar />, div)
  })

  it('renders correct elements', () => {
    const wrapper = shallow(<Avatar profileImage="path/to/image" />)
    expect(wrapper.find('Image')).toHaveLength(1)
    expect(wrapper.find('Icon')).toHaveLength(1)
  })

  it('renders a profile picture if profileImage is defined', () => {
    const wrapper = mount(<Avatar profileImage="path/to/image" />)
    expect(wrapper.find('Image').props().src).toEqual('path/to/image')
  })

  it('renders a faker profile picture if profileImage is not defined', () => {
    const wrapper = mount(<Avatar />)
    expect(wrapper.find('Image').props().src).toContain('https://s3.amazonaws.com/uifaces/faces/')
  })
})
