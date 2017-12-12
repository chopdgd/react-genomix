import React from 'react';
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
                as="a"
                key={index}
                text={c.text}
                href={c.to} />
            )}
          </Dropdown.Menu>
        </Dropdown>
    );
  }
}

export default GenomixMenu;
