import React from 'react';
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'

import Avatar from './Avatar'

describe('Test Avatar', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Avatar />, div)
  })

  it('renders a <Image/> when user is defined', () => {
    const wrapper = mount(<Avatar user={jest.fn()} />)
    expect(wrapper.find('Image')).toHaveLength(1)
  })

  it('renders two <Icon/> when user is undefined', () => {
    const wrapper = mount(<Avatar />)
    expect(wrapper.find('Icon')).toHaveLength(2)
  })
})
