import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import { GeneFixedCell } from '../../index'


describe('Test GeneFixedCell', () => {
  const data = [
    { genes: [{'symbol': 'PNPLA6'}] },
    { genes: [{'symbol': 'PNPLA6'}, {'symbol': 'DDHD2'}, {'symbol': 'VCP'}, {'symbol': 'GBA2'}] },
  ]

  it('renders without crashing', () => {
    const div = document.createElement('div')
    const element = (
      <GeneFixedCell
        data={data}
        rowIndex={1}
        columnKey="genes"
      />
    )
    ReactDOM.render(element, div)
  })

  it('renders the first record with rowIndex = 0', () => {
    const element = (
      <GeneFixedCell
        data={data}
        rowIndex={0}
        columnKey="genes"
      />
    )
    const wrapper = shallow(element)
    expect(wrapper.props().children.props.trigger.props.children).toEqual('PNPLA6')
  })

  it('renders the second record with rowIndex = 1', () => {
    const element = (
      <GeneFixedCell
        data={data}
        rowIndex={1}
        columnKey="genes"
      />
    )
    const wrapper = shallow(element)
    expect(wrapper.props().children.props.trigger.props.children).toEqual('4 genes')
  })
})
