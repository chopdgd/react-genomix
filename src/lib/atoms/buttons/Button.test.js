import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import { Button } from 'LibIndex'


describe('Test Button', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Button />, div)
  })

  it('initial props are set correctly', () => {
    const wrapper = shallow(<Button />)
    expect(wrapper.props().color).toBe(undefined)
    expect(wrapper.props().icon).toBe(undefined)
    expect(wrapper.props().content).toBe(undefined)
    expect(wrapper.props().className).toBe('genomix')
  })

  it('non default props are set correctly', () => {
    const wrapper = shallow(<Button color="red" icon="warning sign" />)
    expect(wrapper.props().color).toBe(undefined)
    expect(wrapper.props().icon).toBe('warning sign')
    expect(wrapper.props().content).toBe(undefined)
    expect(wrapper.props().className).toBe('genomix red')
  })

  it('detail props are set correctly', () => {
    const wrapper = shallow(<Button content="test" details={{ color: 'blue', icon: 'info' }} />)
    expect(wrapper.props().color).toBe(undefined)
    expect(wrapper.props().icon).toBe('info')
    expect(wrapper.props().content).toBe('test')
    expect(wrapper.props().className).toBe('genomix blue')
  })

  it('detail props are overriding props', () => {
    const wrapper = shallow(<Button content="Mike" icon="dont" color="red" details={{ color: 'blue', icon: 'info' }} />)
    expect(wrapper.props().color).toBe(undefined)
    expect(wrapper.props().icon).toBe('info')
    expect(wrapper.props().content).toBe('Mike')
    expect(wrapper.props().className).toBe('genomix blue')
  })
})
