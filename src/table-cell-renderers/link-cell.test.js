import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import { LinkCell } from './link-cell'

describe('LinkCell List', () => {
  const node = <LinkCell cellData={10000000} />

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(node, div)
  })

  it('LinkCell renders correct data', () => {
    const wrapper = shallow(node)
    expect(wrapper.find('ExternalLink').props().children).toEqual(10000000)
  })
})
