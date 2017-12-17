import React from 'react'
import { Grid, Table } from 'semantic-ui-react'

import {
  CheckboxCell,
  DropdownCell,
  GeneCell,
  InterpretationCell,
  LinkCell,
  MolecularConsequenceCell,
  PublicEvidenceCell,
  SexCell,
  TextCell,
  TranscriptCell,
  TurnAroundTimeProgressCell,
} from 'LibIndex'


class ExampleTableCells extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: ''
    }
  }

  onChange = (index) => {
    alert(index)
  }

  onChange2 = (data) => {
    alert(JSON.stringify(data))
  }

  render() {
    const { value } = this.state

    return (
      <Grid padded centered>
        <Grid.Column width={16}>
          <Table textAlign="center">

            <Table.Header>
              <Table.Row>
                <Table.HeaderCell> Checkbox </Table.HeaderCell>
                <Table.HeaderCell> Dropdown </Table.HeaderCell>
                <Table.HeaderCell> Gene </Table.HeaderCell>
                <Table.HeaderCell> Interpretation </Table.HeaderCell>
                <Table.HeaderCell> Link </Table.HeaderCell>
                <Table.HeaderCell> Consequence </Table.HeaderCell>
                <Table.HeaderCell>Public Evidence</Table.HeaderCell>
                <Table.HeaderCell> Sex </Table.HeaderCell>
                <Table.HeaderCell> Text </Table.HeaderCell>
                <Table.HeaderCell> Transcript </Table.HeaderCell>
                <Table.HeaderCell> Turn Around Time </Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <CheckboxCell
                  as="td"
                  rowIndex={1}
                  onChange={this.onChange}
                />
                <DropdownCell
                  as="td"
                  name="test"
                  value={value}
                  rowIndex={1}
                  onChange={this.onChange2}
                  options={[
                    { key: 'key1', value: 1, text: '1'},
                    { key: 'key2', value: 2, text: '2'}
                  ]}
                />
                <GeneCell
                  as="td"
                  gene="PNPLA6"
                />
                <InterpretationCell
                  as="td"
                  classification="pathogenic"
                />
                <LinkCell
                  as="td"
                  href="http://www.google.com"
                  content="google"
                />
                <MolecularConsequenceCell
                  as="td"
                  consequence="missense"
                />
                <PublicEvidenceCell
                  as="td"
                  chromosome="1"
                  position={10}
                  reference="A"
                  alternate="T"
                  clinvarId="39694"
                />
                <SexCell
                  as="td"
                  sex="male"
                />
                <TextCell
                  as="td"
                  content="text"
                />
                <TranscriptCell
                  as="td"
                  transcript="transcript"
                />
                <TurnAroundTimeProgressCell
                  as="td"
                  target={40}
                  start="1987-12-18"
                />
              </Table.Row>
            </Table.Body>

          </Table>
        </Grid.Column>
      </Grid>
    )
  }
}


export default ExampleTableCells
