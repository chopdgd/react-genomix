import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import { TurnAroundTimeProgressFixedCell } from '../../index'


describe('Test TurnAroundTimeProgressFixedCell', () => {
  const data = [
    {
      columnKey: 'columnKey',
      target: 40,
      start: '1987-12-18',
      signout: '1988-08-04',
    }
  ]

  it('renders without crashing', () => {
    const div = document.createElement('div')
    const element = (
      <TurnAroundTimeProgressFixedCell
        data={data}
        rowIndex={0}
        columnKey="columnKey"
        targetKey="target"
        startKey="start"
        signoutKey="signout"
      />
    )
    ReactDOM.render(element, div)
  })

  it('renders the first record with rowIndex = 0', () => {
    const element = (
      <TurnAroundTimeProgressFixedCell
        data={data}
        rowIndex={0}
        columnKey="text"
        targetKey="target"
        startKey="start"
        signoutKey="signout"
      />
    )
    const wrapper = shallow(element)
    expect(wrapper.props().children.props.target).toEqual(40)
    expect(wrapper.props().children.props.start).toEqual('1987-12-18')
    expect(wrapper.props().children.props.signout).toEqual('1988-08-04')
  })
})
