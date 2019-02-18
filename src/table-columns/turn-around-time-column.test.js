import React from 'react'
import { shallow } from 'enzyme'

import { TurnAroundTimeProgressCell, TurnAroundTimeProgressColumn } from '../index'

describe('Test TurnAroundTimeProgressColumn', () => {
  it('cellDataGetter returns expected content', () => {
    const rowData = { target: 40 }
    const dataKey = 'target'
    const element = (
      <TurnAroundTimeProgressColumn
        label="test"
        dataKey={dataKey}
        width={100}
        columnData={{
          targetKey: 'target',
          startKey: 'start',
          signoutKey: 'signout',
        }}
      />
    )
    const wrapper = shallow(element)
    expect(
      wrapper
        .find('Column')
        .props()
        .cellDataGetter({ rowData, dataKey })
    ).toEqual(40)
  })

  it('cellRenderer returns expected content', () => {
    const rowData = { target: 40, start: '12-18-1987', signout: '12-19-1987' }
    const dataKey = 'target'
    const columnData = {
      startKey: 'start',
      signoutKey: 'signout',
    }
    const rowIndex = 1
    const element = <TurnAroundTimeProgressColumn label="test" dataKey={dataKey} width={100} columnData={columnData} />
    const wrapper = shallow(element)
    expect(
      wrapper
        .find('Column')
        .props()
        .cellRenderer({ columnData, dataKey, rowData, rowIndex })
    ).toEqual(<TurnAroundTimeProgressCell as="div" target={40} start="12-18-1987" signout="12-19-1987" rowIndex={1} />)
  })

  it('cellRenderer returns expected content if targetKey is defined', () => {
    const rowData = { target: 40, targetKey: 10, start: '12-18-1987', signout: '12-19-1987' }
    const dataKey = 'target'
    const columnData = {
      targetKey: 'targetKey',
      startKey: 'start',
      signoutKey: 'signout',
    }
    const rowIndex = 1
    const element = <TurnAroundTimeProgressColumn label="test" dataKey={dataKey} width={100} columnData={columnData} />
    const wrapper = shallow(element)
    expect(
      wrapper
        .find('Column')
        .props()
        .cellRenderer({ columnData, dataKey, rowData, rowIndex })
    ).toEqual(<TurnAroundTimeProgressCell as="div" target={10} start="12-18-1987" signout="12-19-1987" rowIndex={1} />)
  })

  it('headerRenderer returns expected content', () => {
    const label = 'Header Column'
    const element = (
      <TurnAroundTimeProgressColumn
        label={label}
        dataKey="test"
        width={100}
        columnData={{
          targetKey: 'target',
          startKey: 'start',
          signoutKey: 'signout',
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
