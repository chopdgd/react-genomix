import React from 'react';
import { Menu } from 'semantic-ui-react';
import PropTypes from 'prop-types'

import CHOPLogo from '../atoms/media/CHOP-Logo';
import UserMenu from '../molecules/menus/UserMenu';
import GenomixMenu from '../molecules/menus/GenomixMenu';

class Navbar extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      activeItem: this.props.activeItem,
    };

    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, { name }) {
    this.setState({
      activeItem: name
    });
  }

  render () {

    const activeItem = this.state.activeItem;
    const navbarItems = this.props.navbarItems;
    const genomixMenuItems = this.props.genomixMenuItems;
    const user = this.props.user;


    return (
      <Menu className="navbar" borderless>
        <Menu.Item>
          <GenomixMenu genomixMenuItems={genomixMenuItems} />
        </Menu.Item>
        <Menu.Item>
          <CHOPLogo />
        </Menu.Item>

        <Menu.Menu position='right'>
          {navbarItems.map((c, index) =>
            <Menu.Item
              as={c.as}
              key={index}
              name={c.text}
              href={c.to}
              to={c.to}
              onClick={this.handleItemClick}
              active={activeItem === c.text }
            />
          )}
          <Menu.Item icon="bell" />
          <Menu.Item>
            <UserMenu className="user-menu" user={user}/>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

Navbar.propTypes = {
  activeItem: PropTypes.string,
  navbarItems: PropTypes.arrayOf(PropTypes.shape({
    as: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.string
    ]),
    text: PropTypes.string,
    to: PropTypes.string
  })),
}
Navbar.defaultProps = {
  navbarItems: [{
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
    }],
}

export default Navbar;
