import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import { MomentCell } from './moment-cell'

describe('MomentCell List', () => {
  Date.now = jest.spyOn(Date, 'now').mockImplementation(() => '2018-12-18T12:00:00')
  const node = <MomentCell cellData="2018-12-17T12:00:00" />

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(node, div)
  })

  it('moment test', () => {
    const wrapper = shallow(node)
    expect(wrapper.debug()).toEqual('a day ago')
  })
})
