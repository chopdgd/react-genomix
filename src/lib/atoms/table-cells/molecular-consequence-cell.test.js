import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import MolecularConsequenceCell from './molecular-consequence-cell'


describe('Test MolecularConsequenceCell', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<MolecularConsequenceCell consequence="missense" />, div)
  })

  it('initial props are set correctly', () => {
    const wrapper = shallow(<MolecularConsequenceCell consequence="missense" />)
    expect(wrapper.instance().props.as).toEqual('div')
    expect(wrapper.instance().props.consequence).toEqual('missense')
    expect(wrapper.instance().props.rowIndex).toEqual(undefined)
    expect(wrapper.instance().props.labelProps).toEqual({ basic: true })
  })

  it('ensure labelProps are spread to label', () => {
    const wrapper = shallow(<MolecularConsequenceCell consequence="missense" labelProps={{ size: 'large', basic: true }} />)
    expect(wrapper.find('Label').props()).toEqual({"basic": true, "color": "orange", "content": "missense", "size": "large"})
  })
})
