import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import { InterpretationCell } from './interpretation-cell'

describe('InterpretationCell List', () => {
  const node = <InterpretationCell cellData={10000000} />

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(node, div)
  })

  it('renders a Label', () => {
    const wrapper = shallow(node)
    expect(wrapper.find('Label')).toHaveLength(1)
  })
})
