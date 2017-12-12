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

const mockedData = [
  {
    id: 1,
    text: "result 1",
    intLink: "/app/link-1",
    extLink: "http://google.com"
  },
  {
    id: 2,
    text: "result 2",
    intLink: "/app/link-2",
    extLink: "http://apple.com"
  }
]

const ExampleInfiniteTable = () => (
  <Grid>
    <Grid.Column>
      <InfiniteScrollTable
        headerCells={['Checkbox', 'Text', 'Internal Link', 'External Link', 'Dropdown']}
        celled
      >
        {mockedData.map((result) => {
          return(
            <Table.Row>
              <CheckboxCell content="check me" onChange={() =>  alert(`row ${result.id}`)} />
              <TextCell content={result.text} />
              <InternalLinkCell content={result.intLink} url={result.intLink} />
              <ExternalLinkCell content={result.extLink} url={result.extLink} />
              <DropdownCell dropdown=
                {
                  <Dropdown
                  options={options}
                  selection
                  />
                }
              />
            </Table.Row>
        )
        })
        }
      </InfiniteScrollTable>
    </Grid.Column>
  </Grid>
)

export default ExampleInfiniteTable
