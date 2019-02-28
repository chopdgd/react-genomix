import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import { PublicEvidenceFixedCell } from '../index'

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
    },
  ]

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

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(element, div)
  })

  it('renders 4 Popups', () => {
    const wrapper = shallow(element)
    expect(wrapper.find('RatingPopup')).toHaveLength(4)
  })

  it('renders COSMIC popup', () => {
    const wrapper = shallow(element)
    const popup = wrapper.find('RatingPopup').at(0)
    expect(popup.props().url).toEqual('http://cancer.sanger.ac.uk/cosmic/mutation/overview?id=10')
  })

  it('renders HGMD popup', () => {
    const wrapper = shallow(element)
    const popup = wrapper.find('RatingPopup').at(1)
    expect(popup.props().url).toEqual('https://portal.biobase-international.com/hgmd/pro/mut.php?acc=CM1')
  })

  it('renders ClinVar popup', () => {
    const wrapper = shallow(element)
    const popup = wrapper.find('RatingPopup').at(2)
    expect(popup.props().url).toEqual('https://preview.ncbi.nlm.nih.gov/clinvar/variation/1111')
  })

  it('renders gnomAD popup', () => {
    const wrapper = shallow(element)
    const popup = wrapper.find('RatingPopup').at(3)
    expect(popup.props().url).toEqual('http://gnomad.broadinstitute.org/variant/1-10-A-T')
  })
})
