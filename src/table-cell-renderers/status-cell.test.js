import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import { BigIntCell } from './bigint-cell'

describe('BigIntCell List', () => {
  const node = <BigIntCell cellData={10000000} />

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(node, div)
  })

  it('Test if Content has gene symbol', () => {
    const wrapper = shallow(node)
    expect(wrapper.debug()).toEqual('10,000,000')
  })
})
