import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import { GeneCell } from 'LibIndex'


describe('Test GeneCell', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<GeneCell gene="PNPLA6" />, div)
  })

  it('initial props are set correctly', () => {
    const wrapper = shallow(<GeneCell gene="PNPLA6" />)
    expect(wrapper.instance().props.as).toEqual('div')
    expect(wrapper.instance().props.gene).toEqual('PNPLA6')
    expect(wrapper.instance().props.rowIndex).toEqual(undefined)
  })

  it('children are rendered correctly (5 children and 3 Links)', () => {
    const wrapper = shallow(<GeneCell gene="PNPLA6" />)
    expect(wrapper.props().children.length).toEqual(5)  // NOTE: space is counted as a child
    expect(wrapper.find('Link')).toHaveLength(3)
  })
})
