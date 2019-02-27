import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import { Button } from '../index'

describe('Test Button', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Button />, div)
  })

  it('initial props are set correctly', () => {
    const wrapper = shallow(<Button />)
    expect(wrapper.find('Button').props().color).toEqual(undefined)
    expect(wrapper.find('Button').props().icon).toEqual(undefined)
    expect(wrapper.find('Button').props().content).toEqual(undefined)
    expect(wrapper.find('Button').props().className).toEqual('genomix')
  })

  it('non default props are set correctly (color is not passed)', () => {
    const wrapper = shallow(<Button color="red" icon="warning sign" />)
    expect(wrapper.props().color).toEqual(undefined)
    expect(wrapper.props().icon).toEqual('warning sign')
    expect(wrapper.props().content).toEqual(undefined)
    expect(wrapper.props().className).toEqual('genomix red')
  })
})
