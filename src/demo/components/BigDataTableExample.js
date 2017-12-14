import React from 'react'
import { Column } from 'react-virtualized'
import { Grid } from 'semantic-ui-react'

import {
  BigDataTable,
  CheckboxColumn,
  DropdownColumn,
  LinkColumn,
  TextColumn,
} from 'LibIndex'


const list = Array.from(new Array(30), (x,i) => ({
  base: 'Base',
  checkbox: true,
  dropdown: 1,
  link: 'link',
  text: 'Text',
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
        <LinkColumn
          label="Link Column"
          dataKey="link"
          width={150}
          columnData={{
            urlBuilder: (cellData) => `https://www.google.com/search?q=${cellData}`
          }}
        />
        <TextColumn
          label="Text Column"
          dataKey="text"
          width={150}
        />
      </BigDataTable>
    </Grid.Column>
  </Grid>
)

export default ExampleInfiniteTable
