import React from 'react'
import ReactDOM from 'react-dom'
import { Form } from 'semantic-ui-react'
import { mount, shallow } from 'enzyme'

import SaveFormModal from './save-form-modal'


const form = (open = false, title = 'title', onSubmit = jest.fn()) => {
  return (
    <SaveFormModal
      className="test-modal"
      formId="test"
      title={title}
      trigger={<p className="trigger">trigger</p>}
      onSubmit={onSubmit}
      open={open}
      defaultValues={{ test1: 'default' }}
    >
      <Form.Input id="test1" name="test1" />
      <Form.Input id="test2" name="test2" />
    </SaveFormModal>
  )
}

describe('Test SaveFormModal', () => {
  it('SaveFormModal renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(form(), div)
  })

  it('SaveFormModal initial props are set correctly', () => {
    const wrapper = mount(form(false, 'test', jest.fn()))
    expect(wrapper.find('.test-modal').props().formId).toBe('test')
    expect(wrapper.find('.test-modal').props().trigger).toEqual(<p className="trigger">trigger</p>)
    expect(wrapper.find('.test-modal').props().title).toBe('test')
    expect(wrapper.find('.test-modal').props().open).toBe(false)
    expect(wrapper.find('.test-modal').props().defaultValues).toEqual({ 'test1': 'default' })
  })

  it('SaveFormModal defaultValues state are set correctly', () => {
    const wrapper = mount(form())
    expect(wrapper.state().formValues).toEqual({ 'test1': 'default' })
    expect(wrapper.state().visible).toEqual(false)
  })

  it('SaveFormModal handle onClick of trigger', () => {
    const wrapper = mount(form())
    expect(wrapper.state().visible).toEqual(false)
    wrapper.find('.trigger').simulate('click')
    expect(wrapper.state().visible).toEqual(true)
  })

  it('SaveFormModal onClick of trigger calls open()', () => {
    const wrapper = mount(form())
    const instance = wrapper.instance()
    const spy = jest.spyOn(instance, 'open')
    instance.forceUpdate()
    wrapper.find('.trigger').simulate('click')
    expect(spy).toHaveBeenCalledTimes(1)
  });

  it('onSubmit calls close() and props.onSubmit()', () => {
    const onSubmit = jest.fn()
    const wrapper = shallow(form(true, 'title', onSubmit))
    const instance = wrapper.instance()
    const closeSpy = jest.spyOn(instance, 'close')
    const setStateSpy = jest.spyOn(instance, 'setState')
    wrapper.find('SaveForm').simulate('submit')
    expect(closeSpy).toHaveBeenCalledTimes(1)
    expect(wrapper.state().visible).toEqual(false)
    expect(onSubmit).toHaveBeenCalledTimes(1)
    expect(setStateSpy).toHaveBeenCalledWith({ visible: false })
  })

  it('onClick of CloseButton calls close()', () => {
    const wrapper = shallow(form(true))
    const spy = jest.spyOn(wrapper.instance(), 'setState')
    wrapper.find('CancelButton').simulate('click')
    expect(wrapper.state().visible).toEqual(false)
    expect(spy).toHaveBeenCalledWith({ visible: false })
  })

  // Currently can't test actions happening in modal
  // See: https://github.com/airbnb/enzyme/blob/master/docs/common-issues.md#testing-third-party-libraries
})
