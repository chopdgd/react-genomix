import React, { useState } from 'react'
import { Column } from 'react-base-table'
import { get, concat, map } from 'lodash'

import {
  BigIntCellRenderer,
  BooleanCellRenderer,
  CheckboxCellRenderer,
  ClassificationCellRenderer,
  ConsequenceCellRenderer,
  DateCellRenderer,
  FloatCellRenderer,
  GeneCellRenderer,
  TranscriptCellRenderer,
  InterpretationCellRenderer,
  LinkCellRenderer,
  LocusCellRenderer,
  MomentCellRenderer,
  SexCellRenderer,
  StatusCellRenderer,
  TurnAroundTimeCellRenderer,
  Table,
} from '../../../src/index'

import useStateList from '../../../src/hooks/use-state-list'

const generateRows = () =>
  Array.from(new Array(300), (x, i) => ({
    id: i,
    bigint: 100000000000,
    boolean: false,
    checkbox: i,
    classification: 'Likely Pathogenic',
    consequence: 'splice acceptor',
    date: '2019-07-28T19:07:42.889394+00:00',
    float: 0.0000783821,
    gene: 'MFN2',
    cdna: 'NM_000001.:c.78A>T',
    interpretation: 'Likely Diagnostic',
    link: 'hurricanes football',
    chromosome: '1',
    start: 10000000,
    end: 15000000,
    moment: '2019-07-28T19:07:42.889394+00:00',
    sex: 'female',
    status: 'running',
    icon: `icon ${i}`,
    startDate: '2019-07-28T19:07:42.889394+00:00',
    signoutDate: '2019-08-28T19:07:42.889394+00:00',
    target: 100,
  }))

const coreProps = {
  minWidth: 100,
  maxWidth: 500,
  resizable: true,
  align: 'center',
}

const ExampleTable = () => {
  const [rows, setRows, resetRows] = useStateList(generateRows())
  const [state, setState, resetState] = useStateList([])
  const [loading, setLoading] = useState(false)
  const onSelect = (e, { cellData }) => setState(cellData)
  const onSelectAll = (event, data, rows) => {
    if (data.checked) {
      resetState(map(rows, obj => obj.id))
    } else {
      resetState([])
    }
  }

  const onEndReached = () => {
    const newRows = generateRows()
    const setRows = () => {
      resetRows(concat(rows, newRows))
      setLoading(false)
    }
    setLoading(true)
    setTimeout(setRows, 5000)
  }

  return (
    <Table data={rows} responsive loading={loading} onFetch={onEndReached}>
      <Column
        key="bigint"
        dataKey="bigint"
        width={150}
        {...coreProps}
        cellRenderer={BigIntCellRenderer}
        headerRenderer={() => 'bigint'}
      />
      <Column
        key="boolean"
        dataKey="boolean"
        width={150}
        {...coreProps}
        cellRenderer={BooleanCellRenderer}
        headerRenderer={() => 'boolean'}
      />
      <Column
        key="checkbox"
        dataKey="checkbox"
        width={150}
        {...coreProps}
        selectedRows={state}
        onSelect={onSelect}
        onSelectAll={onSelectAll}
        cellRenderer={CheckboxCellRenderer}
        headerRenderer={CheckboxCellRenderer}
      />
      <Column
        key="classification"
        dataKey="classification"
        width={150}
        {...coreProps}
        cellRenderer={ClassificationCellRenderer}
        headerRenderer={() => 'classification'}
      />
      <Column
        key="consequence"
        dataKey="consequence"
        width={150}
        {...coreProps}
        cellRenderer={ConsequenceCellRenderer}
        headerRenderer={() => 'consequence'}
      />
      <Column
        key="date"
        dataKey="date"
        width={150}
        {...coreProps}
        cellRenderer={DateCellRenderer}
        headerRenderer={() => 'date'}
      />
      <Column
        key="float"
        dataKey="float"
        width={150}
        {...coreProps}
        cellRenderer={FloatCellRenderer}
        headerRenderer={() => 'float'}
      />
      <Column
        key="gene"
        dataKey="gene"
        width={150}
        {...coreProps}
        cellRenderer={GeneCellRenderer}
        headerRenderer={() => 'gene'}
      />
      <Column
        key="cdna"
        dataKey="cdna"
        width={150}
        {...coreProps}
        cellRenderer={TranscriptCellRenderer}
        headerRenderer={() => 'transcript'}
      />
      <Column
        key="interpretation"
        dataKey="interpretation"
        width={150}
        {...coreProps}
        cellRenderer={InterpretationCellRenderer}
        headerRenderer={() => 'interpretation'}
      />
      <Column
        key="link"
        dataKey="link"
        width={150}
        {...coreProps}
        cellRenderer={LinkCellRenderer}
        urlBuilder={rowData => `https://google.com?q=${get(rowData, 'link')}`}
        headerRenderer={() => 'link'}
      />
      <Column
        key="id"
        dataKey="id"
        width={150}
        {...coreProps}
        cellRenderer={LocusCellRenderer}
        headerRenderer={() => 'locus'}
      />
      <Column
        key="moment"
        dataKey="moment"
        width={150}
        {...coreProps}
        cellRenderer={MomentCellRenderer}
        headerRenderer={() => 'moment'}
      />
      <Column
        key="sex"
        dataKey="sex"
        width={150}
        {...coreProps}
        cellRenderer={SexCellRenderer}
        headerRenderer={() => 'sex'}
      />
      <Column
        key="status"
        dataKey="status"
        width={150}
        {...coreProps}
        cellRenderer={StatusCellRenderer}
        headerRenderer={() => 'status'}
      />
      <Column
        key="tat"
        dataGetter={({ rowData }) => ({
          target: rowData.target,
          start: rowData.startDate,
          signout: rowData.signoutDate,
        })}
        props={{ compact: true }}
        width={150}
        {...coreProps}
        cellRenderer={TurnAroundTimeCellRenderer}
        headerRenderer={() => 'tat'}
      />
    </Table>
  )
}

export default ExampleTable
