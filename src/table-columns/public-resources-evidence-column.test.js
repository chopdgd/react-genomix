import React from 'react'
import { shallow } from 'enzyme'

import { PublicEvidenceCell, PublicEvidenceColumn } from '../index'

describe('Test PublicEvidenceColumn', () => {
  it('cellDataGetter returns expected content', () => {
    const rowData = {
      chromosome: '1',
      position: 10,
      reference: 'A',
      alternate: 'T',
      variant_annotation: {
        cosmic: 'cosmic',
        hgmd: 'hgmd',
        clinvar: 'clinvar',
        gnomad: 'gnomad',
      },
    }
    const dataKey = 'chromosome'
    const element = (
      <PublicEvidenceColumn
        label="test"
        dataKey={dataKey}
        width={100}
        columnData={{
          chromosomeKey: 'chromosome',
          positionKey: 'position',
          referenceKey: 'reference',
          alternateKey: 'alternate',
          cosmicKey: 'variant_annotation.cosmic',
          hgmdKey: 'variant_annotation.hgmd',
          clinvarKey: 'variant_annotation.clinvar',
          gnomadKey: 'variant_annotation.gnomad',
        }}
      />
    )
    const wrapper = shallow(element)
    expect(
      wrapper
        .find('Column')
        .props()
        .cellDataGetter({ rowData, dataKey })
    ).toEqual('1')
  })

  it('cellRenderer returns expected content', () => {
    const dataKey = 'chromosome'
    const rowIndex = 1
    const rowData = {
      chromosome: '1',
      position: 10,
      reference: 'A',
      alternate: 'T',
      variant_annotation: {
        cosmic: 'cosmic',
        hgmd: 'hgmd',
        clinvar: 'clinvar',
        gnomad: 0.1,
      },
    }
    const columnData = {
      chromosomeKey: 'chromosome',
      positionKey: 'position',
      referenceKey: 'reference',
      alternateKey: 'alternate',
      cosmicKey: 'variant_annotation.cosmic',
      hgmdKey: 'variant_annotation.hgmd',
      clinvarKey: 'variant_annotation.clinvar',
      gnomadKey: 'variant_annotation.gnomad',
    }
    const element = <PublicEvidenceColumn label="test" dataKey={dataKey} width={100} columnData={columnData} />
    const wrapper = shallow(element)
    expect(
      wrapper
        .find('Column')
        .props()
        .cellRenderer({ columnData, dataKey, rowData, rowIndex })
    ).toEqual(
      <PublicEvidenceCell
        chromosome="1"
        position={10}
        reference="A"
        alternate="T"
        cosmicId="cosmic"
        hgmdId="hgmd"
        clinvarId="clinvar"
        gnomadFrequency={0.1}
        rowIndex={rowIndex}
      />
    )
  })

  it('headerRenderer returns expected content', () => {
    const label = 'Header Column'
    const element = (
      <PublicEvidenceColumn
        label={label}
        dataKey="test"
        width={100}
        columnData={{
          chromosomeKey: 'chromosome',
          positionKey: 'position',
          referenceKey: 'reference',
          alternateKey: 'alternate',
          cosmicKey: 'variant_annotation.cosmic',
          hgmdKey: 'variant_annotation.hgmd',
          clinvarKey: 'variant_annotation.clinvar',
          gnomadKey: 'variant_annotation.gnomad',
        }}
      />
    )
    const wrapper = shallow(element)
    expect(
      wrapper
        .find('Column')
        .props()
        .headerRenderer({ label })
    ).toEqual(<p>Header Column</p>)
  })
})
