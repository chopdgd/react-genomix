import React from 'react'
import { Card, Grid } from 'semantic-ui-react'

import * as GenomiX from 'LibIndex'


const items = [
  {
    header: 'Autocomplete Dropdown',
    description: (
      <GenomiX.AutoCompleteDropDown
        search={true}
        selection={true}
        endpoint="testAPI?search="
        onChange={(props) => alert(JSON.stringify(props))}
        searchAction={(props) => alert(JSON.stringify(props))}
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
