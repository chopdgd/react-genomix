import React from 'react'
import ReactDOM from 'react-dom'
import { Form } from 'semantic-ui-react'
import { mount } from 'enzyme'

import { Button, SaveForm } from 'LibIndex'


const form = (onSubmit = jest.fn()) => {
  return (
    <SaveForm
      id="test"
      onSubmit={onSubmit}
      saveButton={<Button />}
      defaultValues={{ test1: 'default' }}
    >
      <Form.Input id="test1" name="test1" />
      <Form.Input id="test2" name="test2" />
    </SaveForm>
  )
}

describe('Test SaveForm', () => {
  it('SaveForm renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(form(), div)
  })

  it('SaveForm renders without crashing w/o Button', () => {
    const div = document.createElement('div')
    ReactDOM.render(<SaveForm id="1" onSubmit={jest.fn()}/>, div)
  })

  it('SaveForm initial props are set correctly', () => {
    const wrapper = mount(form())
    expect(wrapper.find('form#test').props().id).toBe('test')
  })

  it('SaveForm defaultValues are set correctly', () => {
    const wrapper = mount(form())
    expect(wrapper.state().formValues).toEqual({ 'test1': 'default' })
  })

  it('SaveForm test onChange', () => {
    const wrapper = mount(form())
    expect(wrapper.state().formValues).toEqual({ 'test1': 'default' })

    wrapper.find('input#test1').simulate('change', { target: { name: 'test1', value: '7' } })
    expect(wrapper.state().formValues).toEqual({ 'test1': '7' })

    wrapper.find('input#test2').simulate('change', { target: { name: 'test2', value: '89' } })
    expect(wrapper.state().formValues).toEqual({ 'test1': '7', 'test2': '89' })
  })

  it('SaveForm test onSubmit using submit', () => {
    const onSubmit = jest.fn()
    const wrapper = mount(form(onSubmit))
    wrapper.find('form#test').simulate('submit')
    expect(onSubmit).toHaveBeenCalledWith({ 'test1': 'default' })
    expect(wrapper.state().formValues).toEqual({})
  })
})
