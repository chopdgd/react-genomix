import React from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'

import LoginForm from './login-form'

describe('LoginForm Tests',() =>{
  it('should render without crahing',() => {
    const div = document.createElement('div');
    ReactDOM.render(<LoginForm />, div)
  })

  it('should throw error if username and password are empty',() => {
    const wrapper = mount(<LoginForm />)
    wrapper.find('form').simulate('submit')
    expect(wrapper.state().error).toBeDefined()
  })

  it('should pass username and password to login function',() => {
    const mockLogin = jest.fn()
    const wrapper = mount(<LoginForm login={mockLogin} />)
    wrapper.state().username = 'a'
    wrapper.state().password = 'b'
    wrapper.find('form').simulate('submit')
    expect(mockLogin.mock.calls).toEqual([[{username: 'a', password: 'b'}]])
  })

  it('should hide error onChange',() => {
    const wrapper = mount(<LoginForm />)
    //raise error:
    wrapper.find('form').simulate('submit')
    //make error hide:
    wrapper.find('input').find('#username').simulate('change')
    expect(wrapper.state().error).toBeUndefined()
  })

  it('should throw Server error if nextProp error is undefined',() => {
    const wrapper = mount(<LoginForm />)
    //trigger componentWillReceiveProps:
    wrapper.setProps({error: {response: undefined}});
    expect(wrapper.state().errorMessage).toContain('Server error!')

  })
})
