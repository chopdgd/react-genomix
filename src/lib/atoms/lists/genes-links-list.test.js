import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import { GeneLinksList } from '../../index'


describe('Test Genes Links List', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<GeneLinksList genes={[{symbol: 'Gene'}]}/>, div)
  })

  it('Test if Content has gene symbol', () => {
    const genes = [{
      'symbol': 'MFN2',
    }]
    const wrapper = shallow(<GeneLinksList genes={genes} />)
    expect(wrapper.find('ListContent').props().children[0]).toEqual('MFN2')
  })

  it('Test if gnomAD and ExAC links are not built if only symbol is passed', () => {
    const genes = [{
      'symbol': 'MFN2',
    }]
    const wrapper = shallow(<GeneLinksList genes={genes} />)
    expect(wrapper.find('ListContent').props().children[5]).toEqual(undefined)
    expect(wrapper.find('ListContent').props().children[6]).toEqual(undefined)
  })

  it('Test if gnomAD and ExAC links are built only if ensembl is passed', () => {
    const genes = [{
      'symbol': 'MFN2',
      'ensemblId': 'MFN2'
    }]
    const wrapper = shallow(<GeneLinksList genes={genes} />)
    expect(wrapper.find('ListContent').props().children[5]).not.toEqual(undefined)
    expect(wrapper.find('ListContent').props().children[6]).not.toEqual(undefined)
  })
})
