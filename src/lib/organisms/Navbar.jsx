import React from 'react';
import { Menu } from 'semantic-ui-react';
import PropTypes from 'prop-types'

import CHOPLogo from '../atoms/media/CHOP-Logo';
import UserMenu from '../molecules/UserMenu';
import GenomixMenu from '../molecules/GenomixMenu';

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
              as="a"
              key={index}
              name={c.text}
              href={c.to}
              onClick={this.handleItemClick}
              active={activeItem === c.text }
            />
          )}
          <Menu.Item icon="bell" />
          <Menu.Item>
            <UserMenu className="user-menu" />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

Navbar.propTypes = {
  activeItem: PropTypes.string,
  navbarItems: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    to: PropTypes.string
  })),
  genomixMenuItems: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    to: PropTypes.string
  }))
}
Navbar.defaultProps = {
  navbarItems: [{
      text: "dashboard",
      to: "/app/dashboard"
    },{
      text: "stats",
      to: "/app/stats"
    },{
      text: "patients",
      to: "/app/patients"
    },{
      text: "orders",
      to: "/app/orders"
    }],
  genomixMenuItems: [{
      text: "Interpretations",
      to: "/app/interpretations"
    },{
      text: "Primers",
      to: "/app/primers"
    },{
      text: "Confirmations",
      to: "/app/confirmations"
    },{
      text: "Test Tracking",
      to: "/app/test-tracking"
    }]
}

export default Navbar;
