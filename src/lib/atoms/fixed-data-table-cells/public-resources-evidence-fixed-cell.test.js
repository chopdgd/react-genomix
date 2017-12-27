import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import { Icon } from 'semantic-ui-react'

import { PublicEvidenceFixedCell } from 'LibIndex'


describe('Test PublicEvidenceFixedCell', () => {
  const data = [
    {
      columnKey: 'columnKey',
      chromosome: '1',
      position: 10,
      reference: 'A',
      alternate: 'T',
      cosmic: 'COSM10',
      hgmd: 'CM1',
      clinvar: 1111,
      gnomad: 0.05,
    }
  ]

  it('renders without crashing', () => {
    const div = document.createElement('div')
    const element = (
      <PublicEvidenceFixedCell
        data={data}
        rowIndex={0}
        columnKey="columnKey"
        chromosomeKey="chromosome"
        positionKey="position"
        referenceKey="reference"
        alternateKey="alternate"
        cosmicKey="cosmic"
        hgmdKey="hgmd"
        clinvarKey="clinvar"
        gnomadKey="gnomad"
      />
    )
    ReactDOM.render(element, div)
  })

  it('renders the first record with rowIndex = 0', () => {
    const element = (
      <PublicEvidenceFixedCell
        data={data}
        rowIndex={0}
        columnKey="columnKey"
        chromosomeKey="chromosome"
        positionKey="position"
        referenceKey="reference"
        alternateKey="alternate"
        cosmicKey="cosmic"
        hgmdKey="hgmd"
        clinvarKey="clinvar"
        gnomadKey="gnomad"
      />
    )
    const wrapper = shallow(element)
    expect(wrapper.props().children).toHaveLength(4)
    expect(wrapper.find('Popup')).toHaveLength(4)
  })

  it('renders only 1 star for COSMIC', () => {
    const element = (
      <PublicEvidenceFixedCell
        data={data}
        rowIndex={0}
        columnKey="columnKey"
        chromosomeKey="chromosome"
        positionKey="position"
        referenceKey="reference"
        alternateKey="alternate"
        cosmicKey="cosmic"
        // hgmdKey="hgmd"
        // clinvarKey="clinvar"
        // gnomadKey="gnomad"
      />
    )
    const wrapper = shallow(element)
    expect(wrapper.props().children[0].props.trigger).toEqual(<Icon as="i" color="yellow" name="star" />)
    expect(wrapper.props().children[1].props.trigger).toEqual(<Icon as="i" color="grey" name="star" />)
    expect(wrapper.props().children[2].props.trigger).toEqual(<Icon as="i" color="grey" name="star" />)
    expect(wrapper.props().children[3].props.trigger).toEqual(<Icon as="i" color="grey" name="star" />)
  })

  it('renders only 1 star for HGMD', () => {
    const element = (
      <PublicEvidenceFixedCell
        data={data}
        rowIndex={0}
        columnKey="columnKey"
        chromosomeKey="chromosome"
        positionKey="position"
        referenceKey="reference"
        alternateKey="alternate"
        // cosmicKey="cosmic"
        hgmdKey="hgmd"
        // clinvarKey="clinvar"
        // gnomadKey="gnomad"
      />
    )
    const wrapper = shallow(element)
    expect(wrapper.props().children[0].props.trigger).toEqual(<Icon as="i" color="grey" name="star" />)
    expect(wrapper.props().children[1].props.trigger).toEqual(<Icon as="i" color="yellow" name="star" />)
    expect(wrapper.props().children[2].props.trigger).toEqual(<Icon as="i" color="grey" name="star" />)
    expect(wrapper.props().children[3].props.trigger).toEqual(<Icon as="i" color="grey" name="star" />)
  })

  it('renders only 1 star for ClinVar', () => {
    const element = (
      <PublicEvidenceFixedCell
        data={data}
        rowIndex={0}
        columnKey="columnKey"
        chromosomeKey="chromosome"
        positionKey="position"
        referenceKey="reference"
        alternateKey="alternate"
        // cosmicKey="cosmic"
        // hgmdKey="hgmd"
        clinvarKey="clinvar"
        // gnomadKey="gnomad"
      />
    )
    const wrapper = shallow(element)
    expect(wrapper.props().children[0].props.trigger).toEqual(<Icon as="i" color="grey" name="star" />)
    expect(wrapper.props().children[1].props.trigger).toEqual(<Icon as="i" color="grey" name="star" />)
    expect(wrapper.props().children[2].props.trigger).toEqual(<Icon as="i" color="yellow" name="star" />)
    expect(wrapper.props().children[3].props.trigger).toEqual(<Icon as="i" color="grey" name="star" />)
  })

  it('renders only 1 star for gnomAD', () => {
    const element = (
      <PublicEvidenceFixedCell
        data={data}
        rowIndex={0}
        columnKey="columnKey"
        chromosomeKey="chromosome"
        positionKey="position"
        referenceKey="reference"
        alternateKey="alternate"
        // cosmicKey="cosmic"
        // hgmdKey="hgmd"
        // clinvarKey="clinvar"
        gnomadKey="gnomad"
      />
    )
    const wrapper = shallow(element)
    expect(wrapper.props().children[0].props.trigger).toEqual(<Icon as="i" color="grey" name="star" />)
    expect(wrapper.props().children[1].props.trigger).toEqual(<Icon as="i" color="grey" name="star" />)
    expect(wrapper.props().children[2].props.trigger).toEqual(<Icon as="i" color="grey" name="star" />)
    expect(wrapper.props().children[3].props.trigger).toEqual(<Icon as="i" color="yellow" name="star" />)
  })

  it('renders only 2 stars for gnomAD and ClinVar', () => {
    const element = (
      <PublicEvidenceFixedCell
        data={data}
        rowIndex={0}
        columnKey="columnKey"
        chromosomeKey="chromosome"
        positionKey="position"
        referenceKey="reference"
        alternateKey="alternate"
        // cosmicKey="cosmic"
        // hgmdKey="hgmd"
        clinvarKey="clinvar"
        gnomadKey="gnomad"
      />
    )
    const wrapper = shallow(element)
    expect(wrapper.props().children[0].props.trigger).toEqual(<Icon as="i" color="grey" name="star" />)
    expect(wrapper.props().children[1].props.trigger).toEqual(<Icon as="i" color="grey" name="star" />)
    expect(wrapper.props().children[2].props.trigger).toEqual(<Icon as="i" color="yellow" name="star" />)
    expect(wrapper.props().children[3].props.trigger).toEqual(<Icon as="i" color="yellow" name="star" />)
  })
})
