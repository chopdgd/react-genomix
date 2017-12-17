import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'semantic-ui-react'
import { shallow } from 'enzyme'

import { PublicEvidenceCell } from 'LibIndex'


describe('Test MolecularConsequenceCell', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    const element = (
      <PublicEvidenceCell
         chromosome="1"
         position={10}
         reference="A"
         alternate="T"
      />
    )
    ReactDOM.render(element, div)
  })

  it('initial props are set correctly', () => {
    const element = (
      <PublicEvidenceCell
         chromosome="1"
         position={10}
         reference="A"
         alternate="T"
      />
    )
    const wrapper = shallow(element)
    expect(wrapper.instance().props.as).toEqual('div')
    expect(wrapper.instance().props.chromosome).toEqual('1')
    expect(wrapper.instance().props.position).toEqual(10)
    expect(wrapper.instance().props.reference).toEqual('A')
    expect(wrapper.instance().props.alternate).toEqual('T')
    expect(wrapper.instance().props.cosmicId).toEqual(undefined)
    expect(wrapper.instance().props.hgmdId).toEqual(undefined)
    expect(wrapper.instance().props.clinvarId).toEqual(undefined)
    expect(wrapper.instance().props.gnomadFrequency).toEqual(undefined)
    expect(wrapper.instance().props.rowIndex).toEqual(undefined)
  })

  it('renders 4 Popups', () => {
    const element = (
      <PublicEvidenceCell
         chromosome="1"
         position={10}
         reference="A"
         alternate="T"
      />
    )
    const wrapper = shallow(element)
    expect(wrapper.find('Popup')).toHaveLength(4)
  })

  it('renders COSMIC popup', () => {
    const element = (
      <PublicEvidenceCell
         chromosome="1"
         position={10}
         reference="A"
         alternate="T"
         cosmicId="cosmicId"
      />
    )
    const wrapper = shallow(element)

    expect(wrapper.props().children[0].props.content).toEqual(
      <div>
        <p>Present in COSMIC!</p>
        <a
          href="http://cancer.sanger.ac.uk/cosmic/mutation/overview?id=cosmicId"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Button as="button" content="Go to COSMIC" fluid={true} />
        </a>
      </div>
    )
    expect(wrapper.props().children[1].props.content).toEqual(<p>Not present in HGMD!</p>)
    expect(wrapper.props().children[2].props.content).toEqual(<p>Not present in ClinVar!</p>)
    expect(wrapper.props().children[3].props.content).toEqual(<p>Not present in gnomAD!</p>)
  })

  it('renders HGMD popup', () => {
    const element = (
      <PublicEvidenceCell
         chromosome="1"
         position={10}
         reference="A"
         alternate="T"
         hgmdId="hgmdId"
      />
    )
    const wrapper = shallow(element)

    expect(wrapper.props().children[0].props.content).toEqual(<p>Not present in COSMIC!</p>)
    expect(wrapper.props().children[1].props.content).toEqual(
      <div>
        <p>Present in HGMD!</p>
        <a
          href="https://portal.biobase-international.com/hgmd/pro/mut.php?acc=hgmdId"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Button as="button" content="Go to HGMD" fluid={true} />
        </a>
      </div>
    )
    expect(wrapper.props().children[2].props.content).toEqual(<p>Not present in ClinVar!</p>)
    expect(wrapper.props().children[3].props.content).toEqual(<p>Not present in gnomAD!</p>)
  })

  it('renders ClinVar popup', () => {
    const element = (
      <PublicEvidenceCell
         chromosome="1"
         position={10}
         reference="A"
         alternate="T"
         clinvarId="clinvarId"
      />
    )
    const wrapper = shallow(element)

    expect(wrapper.props().children[0].props.content).toEqual(<p>Not present in COSMIC!</p>)
    expect(wrapper.props().children[1].props.content).toEqual(<p>Not present in HGMD!</p>)
    expect(wrapper.props().children[2].props.content).toEqual(
      <div>
        <p>Present in ClinVar!</p>
        <a
          href="https://www.ncbi.nlm.nih.gov/clinvar/clinvarId"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Button as="button" content="Go to ClinVar" fluid={true} />
        </a>
      </div>
    )
    expect(wrapper.props().children[3].props.content).toEqual(<p>Not present in gnomAD!</p>)
  })

  it('renders gnomAD popup', () => {
    const element = (
      <PublicEvidenceCell
         chromosome="1"
         position={10}
         reference="A"
         alternate="T"
         gnomadFrequency={0.1}
      />
    )
    const wrapper = shallow(element)

    expect(wrapper.props().children[0].props.content).toEqual(<p>Not present in COSMIC!</p>)
    expect(wrapper.props().children[1].props.content).toEqual(<p>Not present in HGMD!</p>)
    expect(wrapper.props().children[2].props.content).toEqual(<p>Not present in ClinVar!</p>)
    expect(wrapper.props().children[3].props.content).toEqual(
      <div>
        <p>Present in gnomAD!</p>
        <a
          href="http://gnomad.broadinstitute.org/variant/1-10-A-T"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Button as="button" content="Go to gnomAD" fluid={true} />
        </a>
      </div>
    )
  })
})
