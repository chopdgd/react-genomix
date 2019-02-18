import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import { MolecularConsequenceCell } from '../index'

describe('Test MolecularConsequenceCell', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<MolecularConsequenceCell consequence="missense" />, div)
  })

  it('ensure labelProps are spread to label', () => {
    const wrapper = shallow(
      <MolecularConsequenceCell consequence="missense" labelProps={{ size: 'large', basic: true }} />
    )
    expect(wrapper.find('Label').props()).toEqual({
      basic: true,
      color: 'orange',
      content: 'missense',
      size: 'large',
    })
  })
})
