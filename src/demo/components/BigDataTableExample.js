import React from 'react'
import { Column } from 'react-virtualized'
import { Grid } from 'semantic-ui-react'

import {
  BigDataTable,
  CheckboxColumn,
  DropdownColumn,
  InterpretationColumn,
  LinkColumn,
  MolecularConsequenceColumn,
  PublicEvidenceColumn,
  SexColumn,
  TextColumn,
  TurnAroundTimeProgressColumn,
} from 'LibIndex'


const list = Array.from(new Array(30), (x,i) => ({
  base: 'Base',
  checkbox: true,
  dropdown: 1,
  interpretation: 'benign',
  link: 'link',
  consequence: 'missense',
  text: 'Text',
  chromosome: '1',
  position: 10,
  reference: 'A',
  alternate: 'T',
  hgmd: 'hgmd',
  sex: 'm',
  target: 8,
  start: '12-18-1987',
  signout: '12-19-1987',
}))


const ExampleInfiniteTable = () => (
  <Grid>
    <Grid.Column width={16}>
      <BigDataTable
        data={list}
        height={400}
        rowHeight={65}
        headerTextAlign="left"
      >
        <Column
          label="Base Column"
          dataKey="base"
          width={150}
        />
        <CheckboxColumn
          label="Checkbox Column"
          dataKey="checkbox"
          width={150}
          columnData={{ onChange: (props) => alert(JSON.stringify(props)) }}
        />
        <DropdownColumn
          label="Dropdown Column"
          dataKey="dropdown"
          width={350}
          columnData={{
            onChange: (props) => alert(JSON.stringify(props)),
            options: [{ key: 1, value: 1, text: '1' }],
          }}
        />
        <InterpretationColumn
          label="Interpretation Column"
          dataKey="interpretation"
          width={150}
        />
        <LinkColumn
          label="Link Column"
          dataKey="link"
          width={150}
          columnData={{
            urlBuilder: (cellData) => `https://www.google.com/search?q=${cellData}`
          }}
        />
        <MolecularConsequenceColumn
          label="Consequence Column"
          dataKey="consequence"
          width={150}
        />
        <PublicEvidenceColumn
          label="Evidence Column"
          dataKey="variant_annotation"
          width={150}
          columnData={{
            chromosomeKey: 'chromosome',
            positionKey: 'position',
            referenceKey: 'reference',
            alternateKey: 'alternate',
            hgmdKey: 'hgmd'
          }}
        />
        <SexColumn
          label="Sex Column"
          dataKey="sex"
          width={150}
        />
        <TextColumn
          label="Text Column"
          dataKey="text"
          width={150}
        />
        <TurnAroundTimeProgressColumn
          label="Turn Around Time Column"
          dataKey="variant_annotation"
          width={350}
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
