import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import { TranscriptCell } from 'LibIndex'


describe('Test TranscriptCell', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<TranscriptCell transcript="NM_011.1" />, div)
  })

  it('initial props are set correctly', () => {
    const wrapper = shallow(<TranscriptCell transcript="NM_011.1" />)
    expect(wrapper.instance().props.as).toEqual('div')
    expect(wrapper.instance().props.transcript).toEqual('NM_011.1')
    expect(wrapper.instance().props.rowIndex).toEqual(undefined)
  })

  it('children are rendered correctly (3 children and 1 Link)', () => {
    const wrapper = shallow(<TranscriptCell transcript="NM_011.1" />)
    expect(wrapper.props().children.length).toEqual(3)  // NOTE: space is counted as a child
    expect(wrapper.find('Link')).toHaveLength(1)
  })
})
