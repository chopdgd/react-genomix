import React from 'react'
import getUnhandledProps from './getUnhandledProps'
import { shallow } from 'enzyme'

// We spread the unhandled props onto the rendered result.
// Then, we can test the props of the rendered result.
// This is the intended usage of the util.
function TestComponent(props) {
  return <div {...getUnhandledProps(TestComponent, props)} />
}

describe('getUnhandledProps', () => {
  it('removes the proprietary childKey prop', () => {
    const wrapper = shallow(<TestComponent childKey={1} />)
    expect(wrapper.props()).toEqual({})
  })

  it('leaves props that are not defined in handledProps', () => {
    const wrapper = shallow(<TestComponent data-leave-this='it is unhandled' />)
    expect(wrapper.props()).toEqual({"data-leave-this": "it is unhandled"})
  })

  it('removes props defined in handledProps', () => {
    TestComponent.handledProps = ['data-remove-me']
    const wrapper = shallow(<TestComponent data-remove-me={1} />)
    expect(wrapper.props()).toEqual({})
  })
})
