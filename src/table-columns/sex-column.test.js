import React from 'react'
import { shallow } from 'enzyme'

import { SexCell, SexColumn } from '../index'

describe('Test SexColumn', () => {
  it('cellDataGetter returns expected content', () => {
    const rowData = { sex: 'm' }
    const dataKey = 'sex'
    const element = <SexColumn label="sex" dataKey={dataKey} width={100} />
    const wrapper = shallow(element)
    expect(
      wrapper
        .find('Column')
        .props()
        .cellDataGetter({ rowData, dataKey })
    ).toEqual('m')
  })

  it('cellRenderer returns expected content', () => {
    const cellData = 'female'
    const rowIndex = 1
    const element = <SexColumn label="test" dataKey="test" width={100} />
    const wrapper = shallow(element)
    expect(
      wrapper
        .find('Column')
        .props()
        .cellRenderer({ cellData, rowIndex })
    ).toEqual(<SexCell as="div" sex="female" rowIndex={1} />)
  })

  it('headerRenderer returns expected content', () => {
    const label = 'Sex Column'
    const element = <SexColumn label={label} dataKey="test" width={100} />
    const wrapper = shallow(element)
    expect(
      wrapper
        .find('Column')
        .props()
        .headerRenderer({ label })
    ).toEqual(<p>Sex Column</p>)
  })
})
