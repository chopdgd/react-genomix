import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import { ConsequenceCell } from './consequence-cell'

describe('ConsequenceCell List', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ConsequenceCell cellData="data" />, div)
  })

  it('renders Label', () => {
    const node = <ConsequenceCell cellData="data" />
    const wrapper = shallow(node)
    expect(wrapper.find('Label')).toHaveLength(1)
  })
})
