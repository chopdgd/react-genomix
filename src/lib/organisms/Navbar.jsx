import React from 'react';
import { Menu} from 'semantic-ui-react';

import CHOPLogo from '../atoms/media/CHOP-Logo';
import UserMenu from '../molecules/UserMenu';
import GenomixMenu from '../molecules/GenomixMenu';

const Navbar = () => {

  return (
    <Menu className="navbar" borderless>
      <Menu.Item>
        <GenomixMenu />
      </Menu.Item>

      <Menu.Item>
        <CHOPLogo />
      </Menu.Item>

      <Menu.Menu position='right'>
        <Menu.Item name="Dashboard" />
        <Menu.Item name="Stats" active />
        <Menu.Item name="Orders" />
        <Menu.Item name="Patients" />
        <Menu.Item icon="bell" />
        <Menu.Item>
          <UserMenu className="user-menu" />
        </Menu.Item>
      </Menu.Menu>
    </Menu>

  );
}

export default Navbar;
