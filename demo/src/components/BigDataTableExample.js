import React from 'react'
import { Column } from 'react-virtualized'
import { Grid } from 'semantic-ui-react'

import {
  BigDataTable,
  CheckboxColumn,
  DropdownColumn,
  GeneColumn,
  InterpretationColumn,
  LinkColumn,
  MolecularConsequenceColumn,
  PublicEvidenceColumn,
  SexColumn,
  StatusColumn,
  TextColumn,
  TranscriptColumn,
  TurnAroundTimeProgressColumn,
} from '../../../src'


const list = Array.from(new Array(30), (x,i) => ({
  base: 'Base',
  checkbox: true,
  dropdown: 1,
  interpretation: 'benign',
  link: 'link',
  consequence: 'missense',
  text: 'Text',
  transcript: 'NM_000010.1',
  gene: [{symbol: 'PNPLA6'}],
  chromosome: '1',
  position: 10,
  reference: 'A',
  alternate: 'T',
  hgmd: 'hgmd',
  sex: 'm',
  target: 8,
  start: '1987-12-18',
  signout: '1987-12-19',
  status: 'running',
}))


const ExampleInfiniteTable = () => (
  <Grid padded centered>
    <Grid.Column width={16} textAlign="center">
      <BigDataTable
        data={list}
        height={600}
        headerHeight={65}
        headerTextAlign="center"
        rowTextAlign="center"
        rowHeight={65}
      >
        <Column
          label="Base"
          dataKey="base"
          width={100}
        />
        <CheckboxColumn
          label="Checkbox"
          dataKey="checkbox"
          width={100}
          columnData={{ onChange: () => alert('clicked'), checked: [] }}
        />
        <DropdownColumn
          label="Dropdown"
          dataKey="dropdown"
          width={250}
          columnData={{
            onChange: (props) => alert(JSON.stringify(props)),
            options: [{ key: 1, value: 1, text: '1' }],
          }}
        />
        <GeneColumn
          label="Gene"
          dataKey="gene"
          width={150}
        />
        <InterpretationColumn
          label="Interpretation"
          dataKey="interpretation"
          width={120}
        />
        <LinkColumn
          label="Link"
          dataKey="link"
          width={80}
          columnData={{
            urlBuilder: (cellData) => `https://www.google.com/search?q=${cellData}`,
            as: 'a',
          }}
        />
        <MolecularConsequenceColumn
          label="Consequence"
          dataKey="consequence"
          width={100}
        />
        <PublicEvidenceColumn
          label="Evidence"
          dataKey="variant_annotation"
          width={100}
          columnData={{
            chromosomeKey: 'chromosome',
            positionKey: 'position',
            referenceKey: 'reference',
            alternateKey: 'alternate',
            hgmdKey: 'hgmd'
          }}
        />
        <SexColumn
          label="Sex"
          dataKey="sex"
          width={50}
        />
        <StatusColumn
          label="Status"
          dataKey="status"
          width={50}
        />
        <TextColumn
          label="Text"
          dataKey="text"
          width={50}
        />
        <TranscriptColumn
          label="Transcript"
          dataKey="transcript"
          width={150}
        />
        <TurnAroundTimeProgressColumn
          label="Progress"
          dataKey="variant_annotation"
          width={100}
          columnData={{
            targetKey: 'target',
            startKey: 'start',
            signoutKey: 'signout',
          }}
        />
      </BigDataTable>
    </Grid.Column>
  </Grid>
)

export default ExampleInfiniteTable
