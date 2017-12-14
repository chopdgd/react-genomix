import React from 'react';
import PropTypes from 'prop-types'
import { Dropdown, Icon } from 'semantic-ui-react';

class GenomixMenu extends React.Component {
  constructor (props) {
    super (props)

    this.state = {}
  }

  render () {
    const trigger = (
      <span>
        <Icon name="sidebar" size="large"/>
      </span>
    );

    const genomixMenuItems = this.props.genomixMenuItems;

    return (
        <Dropdown trigger={trigger} icon={null}>
          <Dropdown.Menu className="NavbarDropdownMenu">
            {genomixMenuItems.map((c, index) =>
              <Dropdown.Item
                as={c.as}
                key={index}
                text={c.text}
                href={c.to}
                to={c.to} />
            )}
          </Dropdown.Menu>
        </Dropdown>
    );
  }
}

GenomixMenu.propTypes = {
  genomixMenuItems: PropTypes.arrayOf(PropTypes.shape({
    as: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.string
    ]),
    text: PropTypes.string,
    to: PropTypes.string
  }))
}
GenomixMenu.defaultProps = {
  genomixMenuItems: [{
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
}

export default GenomixMenu;
