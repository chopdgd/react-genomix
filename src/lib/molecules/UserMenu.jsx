import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown, Icon, Divider } from 'semantic-ui-react';

const trigger = (
  <span>
    <Icon name="user circle" size="big"/>
    <Icon name="chevron down" size="small"/>
  </span>
)

const UserMenu = ({...props}) => {
  return (
      <Dropdown {...props} trigger={trigger} icon={null}>
        <Dropdown.Menu className="NavbarDropdownMenu">
          <Dropdown.Item text="John Doe" />
          <Dropdown.Item text="doej@email.chop.edu" disabled />
          <Divider />
          <Dropdown.Item text="Settings" />
          <Dropdown.Item text="Sign Out" />
        </Dropdown.Menu>
      </Dropdown>
  );
}

UserMenu.propTypes = {
}

UserMenu.defaultProps = {
}

export default UserMenu;
