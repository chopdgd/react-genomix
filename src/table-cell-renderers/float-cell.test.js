import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import { FloatCell } from './float-cell'

describe('FloatCell List', () => {
  const node = <FloatCell cellData={0.000008} />

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(node, div)
  })

  it('Test if Content has gene symbol', () => {
    const wrapper = shallow(node)
    expect(wrapper.debug()).toEqual('0.00000800')
  })

  it('Test if Content has gene symbol', () => {
    const node = <FloatCell column={{ length: 3 }} cellData={0.12455} />
    const wrapper = shallow(node)
    expect(wrapper.debug()).toEqual('0.125')
  })
})
