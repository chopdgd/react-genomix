import React from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'

import CheckboxCell from './CheckboxCell'

const TestCheckboxCell = ({...props}) => {
  return (
    <CheckboxCell
      {...props}
      content="test"
    />
  );
}

describe('Test CheckboxCell', () => {
  it('CheckboxCell renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(TestCheckboxCell(), div)
  })

  it('CheckboxCell initial props are set correctly', () => {
    const wrapper = mount(TestCheckboxCell())
    expect(wrapper.find('CheckboxCell').props().content).toEqual('test')
  })
})
