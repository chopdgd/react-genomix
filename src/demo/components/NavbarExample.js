import React from 'react'
import { Grid } from 'semantic-ui-react'

import {
  Navbar,
} from 'LibIndex'

const navbarItemsExample = [{
  text: "patients",
  to: "/app/patients"
},{
  text: "orders",
  to: "/app/orders"
}]

const genomixMenuItemsExample = [{
  text: "abc",
  to: "/app/abc"
},{
  text: "xyz",
  to: "/app/xyz"
}]

const NavbarExample = () => (
  <Grid centered>
    <Grid.Column width={16} textAlign="center">
      <Navbar />
      Navbar example with non-default props:
      <Navbar
        navbarItems={navbarItemsExample}
        genomixMenuItems={genomixMenuItemsExample}
      />
    </Grid.Column>
  </Grid>
)

export default NavbarExample
