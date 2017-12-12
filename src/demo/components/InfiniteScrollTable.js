import React from 'react'
import { Grid, Table, Dropdown } from 'semantic-ui-react'

import {
  InfiniteScrollTable,
  TextCell,
  InternalLinkCell,
  ExternalLinkCell,
  CheckboxCell,
  DropdownCell } from 'LibIndex'

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

const ExampleInfiniteTable = () => (
  <Grid>
    <Grid.Column>
      <InfiniteScrollTable
        headerCells={['Checkbox', 'Text', 'Internal Link', 'External Link', 'Dropdown']}
        celled
      >
        {Array.from(new Array(300), (x,i) =>
          <Table.Row>
            <CheckboxCell />
            <TextCell content="Hello there" />
            <InternalLinkCell content="Link 1" url="/app/link-1/" />
            <ExternalLinkCell content="Link 2" url="http://google.com" />
            <DropdownCell dropdown={
              <Dropdown
              options={options}
              selection
            />
          } />
          </Table.Row>
        )}
      </InfiniteScrollTable>
    </Grid.Column>
  </Grid>
)

export default ExampleInfiniteTable
