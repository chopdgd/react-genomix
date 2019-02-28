import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import { PublicEvidenceCell } from '../index'

describe('Test PublicEvidenceCell', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    const element = <PublicEvidenceCell chromosome="1" position={10} reference="A" alternate="T" />
    ReactDOM.render(element, div)
  })

  it('renders 4 Popups', () => {
    const element = <PublicEvidenceCell chromosome="1" position={10} reference="A" alternate="T" />
    const wrapper = shallow(element)
    expect(wrapper.find('RatingPopup')).toHaveLength(4)
  })

  it('renders COSMIC popup', () => {
    const element = <PublicEvidenceCell chromosome="1" position={10} reference="A" alternate="T" cosmicId="cosmicId" />
    const wrapper = shallow(element)
    const popup = wrapper.find('RatingPopup').at(0)
    expect(popup.props().url).toEqual('http://cancer.sanger.ac.uk/cosmic/mutation/overview?id=cosmicId')
  })

  it('renders HGMD popup', () => {
    const element = <PublicEvidenceCell chromosome="1" position={10} reference="A" alternate="T" hgmdId="hgmdId" />
    const wrapper = shallow(element)
    const popup = wrapper.find('RatingPopup').at(1)
    expect(popup.props().url).toEqual('https://portal.biobase-international.com/hgmd/pro/mut.php?acc=hgmdId')
  })

  it('renders ClinVar popup', () => {
    const element = (
      <PublicEvidenceCell chromosome="1" position={10} reference="A" alternate="T" clinvarId="clinvarId" />
    )
    const wrapper = shallow(element)
    const popup = wrapper.find('RatingPopup').at(2)
    expect(popup.props().url).toEqual('https://preview.ncbi.nlm.nih.gov/clinvar/variation/clinvarId')
  })

  it('renders gnomAD popup', () => {
    const element = (
      <PublicEvidenceCell chromosome="1" position={10} reference="A" alternate="T" gnomadFrequency={0.1} />
    )
    const wrapper = shallow(element)
    const popup = wrapper.find('RatingPopup').at(3)
    expect(popup.props().url).toEqual('http://gnomad.broadinstitute.org/variant/1-10-A-T')
  })
})
