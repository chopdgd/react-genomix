import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import { Icon } from 'LibIndex'


describe('Test Icon', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Icon />, div)
  })

  it('initial props are set correctly', () => {
    const wrapper = shallow(<Icon />)
    expect(wrapper.props().color).toBe(undefined)
    expect(wrapper.props().name).toBe(undefined)
    expect(wrapper.props().className).toBe('genomix')
  })

  it('non default props are set correctly (color/name is not passed)', () => {
    const wrapper = shallow(<Icon color="red" icon="warning sign" />)
    expect(wrapper.props().color).toEqual(undefined)
    expect(wrapper.props().icon).toEqual(undefined)
    expect(wrapper.props().className).toEqual('genomix red warning sign')
  })
})
