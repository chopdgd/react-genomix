import React from 'react'
import { Card, Grid } from 'semantic-ui-react'

import * as GenomiX from 'LibIndex'


const items = [
  {
    header: 'TurnAroundTimeProgress',
    description: (
      <GenomiX.TurnAroundTimeProgress
        target={40}
        start="2017-12-11"
        signout="2017-12-17"
    />
    ),
  },
]

const ProgressBars = () => (
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

export default ProgressBars
