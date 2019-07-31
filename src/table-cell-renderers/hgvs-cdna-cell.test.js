import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import { HGVScDNACell } from './hgvs-cdna-cell'

describe('HGVScDNACell List', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<HGVScDNACell cellData="MFN2" />, div)
  })

  it('HGVScDNACell Popup renders trigger for 1 gene', () => {
    const node = <HGVScDNACell cellData="MFN2" />
    const wrapper = shallow(node)
    expect(wrapper.find('ExternalLink').props().children).toEqual('MFN2')
  })
})
