import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import { LocusCell } from './locus-cell'

describe('LocusCell List', () => {
  const node = <LocusCell rowData={{ chromosome: '1', start: 10, end: 11 }} />

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(node, div)
  })

  it('LocusCell ', () => {
    const wrapper = shallow(node)
    expect(wrapper.find('Popup').props().trigger.props.children).toEqual('1:10-11')
  })
})
