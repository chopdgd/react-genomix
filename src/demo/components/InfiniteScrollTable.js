import React from 'react'
import { Grid, Table } from 'semantic-ui-react'

import { InfiniteScrollTable } from 'LibIndex'


const ExampleInfiniteTable = () => (
  <Grid>
    <Grid.Column width={6}>
      <InfiniteScrollTable
        headerCells={['Column1', 'Column2', 'Column3']}
        celled
      >
        {Array.from(new Array(30), (x,i) =>
          <Table.Row>
            <Table.Cell>Cell1</Table.Cell>
            <Table.Cell>Cell2</Table.Cell>
            <Table.Cell>Cell3</Table.Cell>
          </Table.Row>
        )}
      </InfiniteScrollTable>
    </Grid.Column>
  </Grid>
)

export default ExampleInfiniteTable
