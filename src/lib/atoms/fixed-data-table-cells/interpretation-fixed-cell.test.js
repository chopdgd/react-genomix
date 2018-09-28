import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import { InterpretationFixedCell } from '../../index'


describe('Test InterpretationFixedCell', () => {
  const data = [
    { classification: 'benign' },
    { classification: 'pathogenic' },
  ]

  it('renders without crashing', () => {
    const div = document.createElement('div')
    const element = (
      <InterpretationFixedCell
        data={data}
        rowIndex={1}
        columnKey="classification"
      />
    )
    ReactDOM.render(element, div)
  })

  it('renders the first record with rowIndex = 0', () => {
    const element = (
      <InterpretationFixedCell
        data={data}
        rowIndex={0}
        columnKey="classification"
      />
    )
    const wrapper = shallow(element)
    expect(wrapper.props().children.props.color).toEqual('green')
    expect(wrapper.props().children.props.content).toEqual('benign')
  })

  it('renders the second record with rowIndex = 1', () => {
    const element = (
      <InterpretationFixedCell
        data={data}
        rowIndex={1}
        columnKey="classification"
      />
    )
    const wrapper = shallow(element)
    expect(wrapper.props().children.props.color).toEqual('red')
    expect(wrapper.props().children.props.content).toEqual('pathogenic')
  })
})
