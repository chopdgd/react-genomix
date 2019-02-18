import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import { TextFixedCell } from '../index'

describe('Test TextFixedCell', () => {
  const data = [{ text: 'text' }]

  it('renders without crashing', () => {
    const div = document.createElement('div')
    const element = <TextFixedCell data={data} rowIndex={0} columnKey="text" />
    ReactDOM.render(element, div)
  })

  it('renders the first record with rowIndex = 0', () => {
    const element = <TextFixedCell data={data} rowIndex={0} columnKey="text" />
    const wrapper = shallow(element)
    expect(wrapper.props().children).toEqual('text')
  })
})
