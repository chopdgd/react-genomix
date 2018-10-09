import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import { DateFixedCell } from '../../index'


describe('Test DateFixedCell', () => {
  const data = [
    { date: '1987-12-18' },
    { date: '1988-08-04' },
  ]

  it('renders without crashing', () => {
    const div = document.createElement('div')
    const element = (
      <DateFixedCell
        data={data}
        rowIndex={1}
        columnKey="date"
      />
    )
    ReactDOM.render(element, div)
  })

  it('renders the first record with rowIndex = 0', () => {
    const element = (
      <DateFixedCell
        data={data}
        rowIndex={0}
        columnKey="date"
      />
    )
    const wrapper = shallow(element)
    expect(wrapper.props().children).toEqual('12/18/1987')
  })

  it('renders the second record with rowIndex = 1', () => {
    const element = (
      <DateFixedCell
        data={data}
        rowIndex={1}
        columnKey="date"
      />
    )
    const wrapper = shallow(element)
    expect(wrapper.props().children).toEqual('08/04/1988')
  })
})
