import React from 'react';
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import { Logo } from 'LibIndex'


describe('Test Logo', () => {
  const element = <Logo />

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(element, div)
  })

  it('renders an <Image />', () => {
    const wrapper = shallow(element)
    expect(wrapper.find('Image')).toHaveLength(1)
  })
})
