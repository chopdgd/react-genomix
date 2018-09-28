import React from 'react'
import { MenuItem } from 'semantic-ui-react'

import { Navbar, UserMenu } from 'lib'


const userMenu = (
  <UserMenu
    className="user-menu"
    username="doej"
    email="doej@email.chop.edu"
    name="Jane Doe"
  />
)

const NavbarExample = (props) => (
    <Navbar
      userMenu={userMenu}
      logo={<p>logo</p>}
      navCallback={props.navCallback}
    >
      <MenuItem name="orders" />
      <MenuItem name="patients" />
      <MenuItem icon="bell" />
    </Navbar>
)

export default NavbarExample
