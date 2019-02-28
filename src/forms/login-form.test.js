import React from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'

import { LoginForm } from '../index'

describe('LoginForm Tests', () => {
  const handleLogin = jest.fn()
  const element = <LoginForm handleLogin={handleLogin} />

  it('should render without crahing', () => {
    const div = document.createElement('div')
    ReactDOM.render(element, div)
  })

  it('should throw error if username and password are empty', () => {
    const wrapper = mount(element)
    expect(wrapper.find('Message')).toHaveLength(0)
    wrapper.find('Form').simulate('submit')
    expect(wrapper.find('Message')).toHaveLength(1)
  })
})
