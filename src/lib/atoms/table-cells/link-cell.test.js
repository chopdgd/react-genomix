import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import { LinkCell } from '../../index'


describe('Test LinkCell', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    const component = (
      <LinkCell
        href="http://www.google.com"
        content="hi"
        rowIndex={1}
      />
    )
    ReactDOM.render(component, div)
  })

  it('props are spread correctly', () => {
    const component = (
      <LinkCell
        linkAs="p"
        href="app/1"
        content="hi"
        rowIndex={1}
      />
    )
    const wrapper = shallow(component)
    expect(wrapper.find('Link').props().as).toEqual('p')
    expect(wrapper.find('Link').props().href).toEqual('app/1')
    expect(wrapper.find('Link').props().content).toEqual('hi')
  })
})
