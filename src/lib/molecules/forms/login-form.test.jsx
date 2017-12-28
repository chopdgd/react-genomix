import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import { LoginForm } from 'LibIndex'


describe('LoginForm Tests',() => {
  const handleLogin = jest.fn()
  const event = {preventDefault: jest.fn()}
  const element = (
    <LoginForm handleLogin={handleLogin}/>
  )

  it('should render without crahing',() => {
    const div = document.createElement('div')
    ReactDOM.render(element, div)
  })

  it('should throw error if username and password are empty',() => {
    const wrapper = shallow(element)
    expect(wrapper.state().error).not.toBeDefined()
    wrapper.find('Form').simulate('submit', event)
    expect(wrapper.state().error).toBeDefined()
    expect(wrapper.state().error).toEqual('Username and Password are required!')
  })

  it('should pass username and password to handleLogin function',() => {
    const wrapper = shallow(element)
    wrapper.state().username = 'a'
    wrapper.state().password = 'b'
    wrapper.find('Form').simulate('submit', event)
    expect(handleLogin.mock.calls).toEqual([[{username: 'a', password: 'b'}]])
    expect(handleLogin).toHaveBeenCalledTimes(1)
    expect(handleLogin).toHaveBeenCalledWith({username: 'a', password: 'b'})
  })

  it('should hide error onChange',() => {
    const wrapper = shallow(element)
    expect(wrapper.state().error).toBeUndefined()
    wrapper.find('Form').simulate('submit', event)
    expect(wrapper.state().error).toBeDefined()
    wrapper.find('FormInput').find('#username').simulate('change', event, { name: 'username', value: 'a'})
    expect(wrapper.state().error).toBeUndefined()
  })

  it('handleChange should update state',() => {
    const wrapper = shallow(element)
    expect(wrapper.state().username).toEqual('')
    expect(wrapper.state().password).toEqual('')

    wrapper.find('FormInput').find('#username').simulate('change', event, { name: 'username', value: 'a'})
    wrapper.find('FormInput').find('#password').simulate('change', event, { name: 'password', value: 'b'})
    expect(wrapper.state().username).toEqual('a')
    expect(wrapper.state().password).toEqual('b')
  })

  it('componentWillReceiveProps updates state according when setting Props',() => {
    const wrapper = shallow(element)

    expect(wrapper.state().loading).toEqual(false)
    expect(wrapper.state().error).toEqual(undefined)

    wrapper.setProps({ loading: true })
    expect(wrapper.state().loading).toEqual(true)

    wrapper.setProps({ error: 'error' })
    expect(wrapper.state().error).toEqual('error')
  })
})
