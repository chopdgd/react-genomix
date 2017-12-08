import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown, Icon, Divider } from 'semantic-ui-react';

const trigger = (
  <span>
    <Icon name="sidebar" size="large"/>
  </span>
)

const GenomixMenu = ({...props}) => {
  return (
      <Dropdown {...props} trigger={trigger} icon={null}>
        <Dropdown.Menu className="NavbarDropdownMenu">
          <Dropdown.Item text="Interpretation" />
          <Dropdown.Item text="Primers" />
          <Dropdown.Item text="Confirmations" />
          <Dropdown.Item text="Test Tracking" />
        </Dropdown.Menu>
      </Dropdown>
  );
}

GenomixMenu.propTypes = {
}

GenomixMenu.defaultProps = {
}

export default GenomixMenu;
