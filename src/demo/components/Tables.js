import React from 'react';
import { Divider, Table, Grid, Dropdown } from 'semantic-ui-react';

import * as GenomiX from 'LibIndex';
const options = [
  {
  'key': 1,
  'label': 'option 1',
  'value': 'option 1',
  },
  {
  'key': 2,
  'label': 'option 2',
  'value': 'option 2',
  }
]

const Tables = () => (
  <Grid padded centered>

    <Grid.Row>

      <Grid.Column width={16} textAlign="center">
        <h1>Tables</h1>
        <Divider />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>

      <Grid.Column textAlign="center">
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Text Cell</Table.HeaderCell>
              <Table.HeaderCell>External Link Cell</Table.HeaderCell>
              <Table.HeaderCell>Internal Link Cell</Table.HeaderCell>
              <Table.HeaderCell>Checkbox Cell</Table.HeaderCell>
              <Table.HeaderCell>Dropdown Cell</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <GenomiX.TextCell content="text cell info" />
              <GenomiX.ExternalLinkCell content="external link" url="http://www.google.com" />
              <GenomiX.InternalLinkCell content="internal link" url="/app/internal-link" />
              <GenomiX.CheckboxCell />
              <GenomiX.DropdownCell dropdown={<Dropdown options={options} selection />} />
            </Table.Row>
          </Table.Body>
        </Table>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default Tables;
