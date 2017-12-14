import React from 'react'
import { Grid } from 'semantic-ui-react'

import {
  Navbar,
} from 'LibIndex'

const navbarItemsExample = [{
      as: "a",
      text: "dashboard",
      // to: "/app/dashboard"
    },{
      as: "a",
      text: "stats",
      // to: "/app/stats"
    },{
      as: "a",
      text: "patients",
      // to: "/app/patients"
    },{
      as: "a",
      text: "orders",
      // to: "/app/orders"
}]

const genomixMenuItemsExample = [{
    as: "a",
    text: "Interpretations",
    to: "/app/interpretations"
  },{
    as: "a",
    text: "Primers",
    to: "/app/primers"
  },{
    as: "a",
    text: "Confirmations",
    to: "/app/confirmations"
  },{
    as: "a",
    text: "Test Tracking",
    to: "/app/test-tracking"
  }]

const userExample = {
    pk: 1,
    username: 'doej',
    email: 'doej@email.chop.edu',
    first_name: 'Jane',
    last_name: 'Doe',
}

const NavbarExample = () => (
  <Grid centered>
    <Grid.Column width={16} textAlign="center">
      <Navbar
        navbarItems={navbarItemsExample}
        genomixMenuItems={genomixMenuItemsExample}
        user={userExample}
      />
    </Grid.Column>
  </Grid>
)

export default NavbarExample
