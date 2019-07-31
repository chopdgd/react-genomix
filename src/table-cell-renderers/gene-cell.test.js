import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import { GeneCell } from './gene-cell'

describe('GeneCell List', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<GeneCell cellData="MFN2" />, div)
  })

  it('GeneCell Popup renders trigger for 1 gene', () => {
    const node = <GeneCell cellData="MFN2" />
    const wrapper = shallow(node)
    expect(wrapper.find('Popup').props().trigger.props.children).toEqual('MFN2')
  })

  it('GeneCell Popup renders trigger for 5 genes', () => {
    const node = <GeneCell cellData={['MFN2', 'GBA2', 'MFN1', 'PNPLA6']} />
    const wrapper = shallow(node)
    expect(wrapper.find('Popup').props().trigger.props.children).toEqual('4 genes')
  })
})
