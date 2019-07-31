import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import { DateCell } from './date-cell'

describe('DateCell List', () => {
  const node = <DateCell cellData="2018-12-18" />

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(node, div)
  })

  it('DateCell renders date', () => {
    const wrapper = shallow(node)
    expect(wrapper.debug()).toEqual('12/18/2018')
  })
})
