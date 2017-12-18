import React from 'react'
import { shallow } from 'enzyme'

import { TranscriptCell, TranscriptColumn } from 'LibIndex'


describe('Test TranscriptColumn', () => {
  it('cellDataGetter returns expected content', () => {
    const rowData = { transcript: 'PNPLA6' }
    const dataKey = 'transcript'
    const element = (
      <TranscriptColumn
        label="test"
        dataKey={dataKey}
        width={100}
      />
    )
    const wrapper = shallow(element)
    expect(wrapper.find('Column').props().cellDataGetter({ rowData, dataKey }))
      .toEqual('PNPLA6')
  })


  it('cellRenderer returns expected content', () => {
    const cellData = 'PNPLA6'
    const rowIndex = 1
    const element = (
      <TranscriptColumn
        label="test"
        dataKey="test"
        width={100}
      />
    )
    const wrapper = shallow(element)
    expect(wrapper.find('Column').props().cellRenderer({ cellData, rowIndex }))
      .toEqual(<TranscriptCell as="div" transcript="PNPLA6" rowIndex={1} />)
  })

  it('headerRenderer returns expected content', () => {
    const label = 'Header Column'
    const element = (
      <TranscriptColumn
        label={label}
        dataKey="test"
        width={100}
      />
    )
    const wrapper = shallow(element)
    expect(wrapper.find('Column').props().headerRenderer({label }))
      .toEqual(<p>Header Column</p>)
  })
})
