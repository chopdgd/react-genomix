import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import { LabelCell } from './label-cell'

describe('LabelCell List', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<LabelCell cellData="data" />, div)
  })

  it('renders Label', () => {
    const node = <LabelCell cellData="data" />
    const wrapper = shallow(node)
    expect(wrapper.find('Label')).toHaveLength(1)
  })
})
