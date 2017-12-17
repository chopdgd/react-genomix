import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import { InterpretationCell } from 'LibIndex'


describe('Test InterpretationCell', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<InterpretationCell classification="benign" />, div)
  })

  it('initial props are set correctly', () => {
    const wrapper = shallow(<InterpretationCell classification="benign" />)
    expect(wrapper.instance().props.as).toEqual('div')
    expect(wrapper.instance().props.classification).toEqual('benign')
    expect(wrapper.instance().props.rowIndex).toEqual(undefined)
    expect(wrapper.instance().props.labelProps).toEqual({ basic: true })
  })

  it('ensure labelProps are spread to label', () => {
    const wrapper = shallow(<InterpretationCell classification="benign" labelProps={{ size: 'large', basic: true }} />)
    expect(wrapper.find('Label').props()).toEqual({"basic": true, "color": "green", "content": "benign", "size": "large"})
  })
})
