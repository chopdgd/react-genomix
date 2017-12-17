import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import { TurnAroundTimeProgressCell } from 'LibIndex'


describe('Test TurnAroundTimeProgressCell', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<TurnAroundTimeProgressCell target={40} />, div)
  })

  it('initial props are set correctly', () => {
    const wrapper = shallow(<TurnAroundTimeProgressCell target={40} />)
    expect(wrapper.instance().props.as).toEqual('div')
    expect(wrapper.instance().props.target).toEqual(40)
    expect(wrapper.instance().props.start).toEqual(undefined)
    expect(wrapper.instance().props.signout).toEqual(undefined)
    expect(wrapper.instance().props.rowIndex).toEqual(undefined)
    expect(wrapper.instance().props.progressProps).toEqual({ size: 'tiny' })
  })
})
