import React from 'react'
import ReactDOM from 'react-dom'
import { Form } from 'semantic-ui-react'
import { shallow } from 'enzyme'

import { Button, SaveForm } from 'LibIndex'


const form = (defaultValues, handleSubmit, handleChange) => {
  return (
    <SaveForm
      formId="test"
      defaultValues={defaultValues}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      saveButton={<Button />}
    >
      <Form.Input id="test1" name="test1" />
    </SaveForm>
  )
}

describe('Test SaveForm', () => {
  const event = {preventDefault: jest.fn()}

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(form(), div)
  })

  it('defaultValues are set correctly', () => {
    const wrapper = shallow(form({'test1': 'default'}))
    expect(wrapper.state().test1).toEqual('default')
  })

  it('onChange calls handleChange', () => {
    const handleChange = jest.fn()
    const wrapper = shallow(form(undefined, jest.fn(), handleChange))
    expect(wrapper.instance().state).toEqual({})

    const data = { name: 'test1', value: '7' }
    const event = { target: data }
    wrapper.find('FormInput').simulate('change', event, data)
    expect(wrapper.instance().state).toEqual({'test1': '7'})
    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  it('onSubmit calls handleSubmit', () => {
    const handleSubmit = jest.fn()
    const wrapper = shallow(form({ 'test1': 'default' }, handleSubmit))
    wrapper.find('Form').simulate('submit', event)
    expect(handleSubmit).toHaveBeenCalledWith({ 'test1': 'default' })
  })

  it('handle handleChange when its undefined', () => {
    const wrapper = shallow(form({ test1: 'default' }))
    const data = { name: 'test1', value: '7' }
    const event = { target: data }
    wrapper.find('FormInput').simulate('change', event, data)
    expect(wrapper.instance().state.test1).toEqual('7')
  })

  it('handle handleSubmit when its undefined', () => {
    const wrapper = shallow(form())
    expect(wrapper.instance().state).toEqual({})
    wrapper.find('Form').simulate('submit', event)
    expect(wrapper.instance().state).toEqual({})
  })
})
