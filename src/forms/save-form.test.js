import React from 'react'
import ReactDOM from 'react-dom'
import { Form } from 'semantic-ui-react'
import { shallow } from 'enzyme'

import { Button, SaveForm } from '../index'

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
  const event = { preventDefault: jest.fn() }

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(form(), div)
  })

  it('onChange calls handleChange', () => {
    const handleChange = jest.fn()
    const wrapper = shallow(form(undefined, jest.fn(), handleChange))

    const data = { name: 'test1', value: '7' }
    const event = { target: data }
    wrapper.find('FormInput').simulate('change', event, data)
    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  it('onSubmit calls handleSubmit', () => {
    const handleSubmit = jest.fn()
    const wrapper = shallow(form({ test1: 'default' }, handleSubmit))
    wrapper.find('Form').simulate('submit', event)
    expect(handleSubmit).toHaveBeenCalledWith({ test1: 'default' })
  })
})
