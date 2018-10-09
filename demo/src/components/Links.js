import React from 'react'
import { Card, Grid } from 'semantic-ui-react'

import * as GenomiX from '../../../src'


const items = [
  {
    header: 'Link',
    description: (
      <GenomiX.Link
        href="http://www.google.com"
        content="google"
    />
    ),
  },
]

const Links = () => (
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

export default Links
