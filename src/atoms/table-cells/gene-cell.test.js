import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import { GeneCell } from '../../index'


describe('Test GeneCell', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<GeneCell genes={[{symbol: 'PNPLA6'}]} />, div)
  })

  it('content is rendered with Symbols when less than 3 genes', () => {
    const genes = [
      {
        symbol: 'PNPLA6',
        ensemblId: 'ENG000',
      },
      {
        symbol: 'PNPLA7',
        ensemblId: 'ENG0001',
      }
    ]
    const wrapper = shallow(<GeneCell genes={genes} />)
    expect(wrapper.find('GeneResourcesPopup').props().trigger.props.children).toEqual('PNPLA6,PNPLA7')
  })

  it('content is rendered with count when more than 3 genes', () => {
    const genes = [
      {
        symbol: 'PNPLA6',
        ensemblId: 'ENG000',
      },
      {
        symbol: 'PNPLA7',
        ensemblId: 'ENG0001',
      },
      {
        symbol: 'PNPLA8',
        ensemblId: 'ENG000',
      },
      {
        symbol: 'PNPLA9',
        ensemblId: 'ENG0001',
      }
    ]
    const wrapper = shallow(<GeneCell genes={genes} />)
    expect(wrapper.find('GeneResourcesPopup').props().trigger.props.children).toEqual('4 genes')
  })
})
