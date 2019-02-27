import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import { MolecularConsequenceFixedCell } from '../index'

describe('Test MolecularConsequenceFixedCell', () => {
  const data = [{ consequence: 'missense' }, { consequence: 'splice-acceptor' }]

  it('renders without crashing', () => {
    const div = document.createElement('div')
    const element = <MolecularConsequenceFixedCell data={data} rowIndex={1} columnKey="consequence" />
    ReactDOM.render(element, div)
  })

  it('renders the first record with rowIndex = 0', () => {
    const element = <MolecularConsequenceFixedCell data={data} rowIndex={0} columnKey="consequence" />
    const wrapper = shallow(element)
    expect(wrapper.props().children.props.color).toEqual('orange')
    expect(wrapper.props().children.props.content).toEqual('missense')
  })

  it('renders the second record with rowIndex = 1', () => {
    const element = <MolecularConsequenceFixedCell data={data} rowIndex={1} columnKey="consequence" />
    const wrapper = shallow(element)
    expect(wrapper.props().children.props.color).toEqual('blue')
    expect(wrapper.props().children.props.content).toEqual('splice-acceptor')
  })
})
