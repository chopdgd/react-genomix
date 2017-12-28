import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import { GeneFixedCell } from 'LibIndex'


describe('Test GeneFixedCell', () => {
  const data = [
    { gene: 'PNPLA6' },
    { gene: 'DDHD2' },
  ]

  it('renders without crashing', () => {
    const div = document.createElement('div')
    const element = (
      <GeneFixedCell
        data={data}
        rowIndex={1}
        columnKey="gene"
      />
    )
    ReactDOM.render(element, div)
  })

  it('renders the first record with rowIndex = 0', () => {
    const element = (
      <GeneFixedCell
        data={data}
        rowIndex={0}
        columnKey="gene"
      />
    )
    const wrapper = shallow(element)
    expect(wrapper.props().children).toHaveLength(5)
    expect(wrapper.props().children[0]).toEqual('PNPLA6')
    expect(wrapper.props().children[2].props.href).toEqual('https://portal.biobase-international.com/hgmd/pro/gene.php?gene=PNPLA6')
    expect(wrapper.props().children[3].props.href).toEqual('https://www.omim.org/search/?index=entry&search=PNPLA6')
    expect(wrapper.props().children[4].props.href).toEqual('https://www.ncbi.nlm.nih.gov/pubmed/?term=PNPLA6')
  })

  it('renders the second record with rowIndex = 1', () => {
    const element = (
      <GeneFixedCell
        data={data}
        rowIndex={1}
        columnKey="gene"
      />
    )
    const wrapper = shallow(element)
    expect(wrapper.props().children).toHaveLength(5)
    expect(wrapper.props().children[0]).toEqual('DDHD2')
    expect(wrapper.props().children[2].props.href).toEqual('https://portal.biobase-international.com/hgmd/pro/gene.php?gene=DDHD2')
    expect(wrapper.props().children[3].props.href).toEqual('https://www.omim.org/search/?index=entry&search=DDHD2')
    expect(wrapper.props().children[4].props.href).toEqual('https://www.ncbi.nlm.nih.gov/pubmed/?term=DDHD2')
  })
})
