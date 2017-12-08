import React from 'react'
import { Grid } from 'semantic-ui-react'

import {
  Navbar,
} from 'LibIndex'


const NavbarExample = () => (
  <Grid centered>
    <Grid.Column width={16} textAlign="center">
      <Navbar />
    </Grid.Column>
  </Grid>
)

export default NavbarExample
