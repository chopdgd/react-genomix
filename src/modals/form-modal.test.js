import React from 'react'
import ReactDOM from 'react-dom'
import { Form } from 'semantic-ui-react'
import { mount } from 'enzyme'

import { FormModal } from '../index'

const form = (open = false, title = 'title', handleSubmit = jest.fn(), handleChange = jest.fn()) => {
  return (
    <FormModal
      className="test-modal"
      formId="test"
      title={title}
      trigger={<p className="trigger">trigger</p>}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      open={open}
      defaultValues={{ test1: 'default' }}
    >
      <Form.Input id="test1" name="test1" />
    </FormModal>
  )
}

describe('Test FormModal', () => {
  it('FormModal renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(form(), div)
  })

  it('FormModal handle onClick of trigger', () => {
    const wrapper = mount(form())
    expect(wrapper.find('Modal').props().open).toEqual(false)
    wrapper.find('.trigger').simulate('click')
    expect(wrapper.find('Modal').props().open).toEqual(true)
  })

  it('onClick of CloseButton calls close()', () => {
    const wrapper = mount(form(true))
    expect(wrapper.find('Modal').props().open).toEqual(true)
    wrapper.find('CancelButton').simulate('click')
    expect(wrapper.find('Modal').props().open).toEqual(false)
  })
})
