import React from 'react'
import { Card, Grid } from 'semantic-ui-react'

import * as GenomiX from 'LibIndex'


const items = [
  {
    header: 'Autocomplete Dropdown',
    description: (
      <GenomiX.AutoCompleteDropDown
        endpoint="testAPI?search="
        onChange={(e, { name, value }) => alert(JSON.stringify(value))}
        searchAction={(props) => alert(JSON.stringify(props))}
        options={[
          {key: '3', value: '3', text: '3'},
          {key: '4', value: '4', text: '4'},
        ]}
      />
    ),
    meta: 'endpoint: testAPI?search='
  },
]

const Dropdowns = () => (
  <Grid padded centered>
    <Grid.Column width={16} textAlign="center">
      <Card.Group
        items={items}
        textAlign="center"
        itemsPerRow={5}
        stackable
      />
    </Grid.Column>
  </Grid>
)

export default Dropdowns
