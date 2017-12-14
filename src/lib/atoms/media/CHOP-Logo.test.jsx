import React from 'react';
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'

import CHOPLogo from './CHOP-Logo'

describe('Test Avatar', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<CHOPLogo />, div)
  })

  it('renders two <Icon/> when user is undefined', () => {
    const wrapper = mount(<CHOPLogo />)
    expect(wrapper.find('Image')).toHaveLength(1)
  })
})
