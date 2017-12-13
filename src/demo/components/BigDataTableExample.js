import React from 'react'
import { Column } from 'react-virtualized'
import { Grid } from 'semantic-ui-react'

import { BigDataTable } from 'LibIndex'


const list = Array.from(new Array(30), (x,i) => ({
  base: 'Base',
  checkbox: true,
  dropdown: 1,
  link: 'http://www.google.com',
  text: 'Text',
}))


const ExampleInfiniteTable = () => (
  <Grid>
    <Grid.Column width={12}>
      <BigDataTable
        data={list}
        height={400}
      >
        <Column
          label="Base Column"
          dataKey="base"
          width={150}
        />
      </BigDataTable>
    </Grid.Column>
  </Grid>
)

export default ExampleInfiniteTable
