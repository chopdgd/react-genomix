import React from 'react'
import { DropdownItem, Grid, MenuItem } from 'semantic-ui-react'

import { DropdownMenu, Navbar, UserMenu } from 'LibIndex'


const userMenu = (
  <UserMenu
    className="user-menu"
    username="doej"
    email="doej@email.chop.edu"
    name="Jane Doe"
  />
)

const subMenu = (
  <DropdownMenu>
    <DropdownItem icon="pencil" text="sanger" name="sanger" />
  </DropdownMenu>
)

const NavbarExample = () => (
  <Grid centered>
    <Grid.Column width={16} textAlign="center">
      <Navbar
        userMenu={userMenu}
        subMenu={subMenu}
      >
        <MenuItem name="orders" />
        <MenuItem name="patients" />
        <MenuItem icon="bell" />
      </Navbar>
    </Grid.Column>
  </Grid>
)

export default NavbarExample
