import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import { ClassificationCell } from './classification-cell'

describe('ClassificationCell List', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ClassificationCell cellData="data" />, div)
  })

  it('renders Label', () => {
    const node = <ClassificationCell cellData="data" />
    const wrapper = shallow(node)
    expect(wrapper.find('Label')).toHaveLength(1)
  })
})
