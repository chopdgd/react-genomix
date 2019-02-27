import React from 'react'
import { shallow } from 'enzyme'

import { MolecularConsequenceCell, MolecularConsequenceColumn } from '../index'

describe('Test MolecularConsequenceColumn', () => {
  it('cellDataGetter returns expected content', () => {
    const rowData = { consequence: 'missense' }
    const dataKey = 'consequence'
    const element = <MolecularConsequenceColumn label="test" dataKey={dataKey} width={100} />
    const wrapper = shallow(element)
    expect(
      wrapper
        .find('Column')
        .props()
        .cellDataGetter({ rowData, dataKey })
    ).toEqual('missense')
  })

  it('cellRenderer returns expected content', () => {
    const cellData = 'splice'
    const rowIndex = 1
    const element = <MolecularConsequenceColumn label="test" dataKey="test" width={100} />
    const wrapper = shallow(element)
    expect(
      wrapper
        .find('Column')
        .props()
        .cellRenderer({ cellData, rowIndex })
    ).toEqual(<MolecularConsequenceCell as="div" consequence="splice" rowIndex={1} />)
  })

  it('headerRenderer returns expected content', () => {
    const label = 'Header Column'
    const element = <MolecularConsequenceColumn label={label} dataKey="test" width={100} />
    const wrapper = shallow(element)
    expect(
      wrapper
        .find('Column')
        .props()
        .headerRenderer({ label })
    ).toEqual(<p>Header Column</p>)
  })
})
