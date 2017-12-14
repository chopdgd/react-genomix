import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown, Divider } from 'semantic-ui-react';

import Avatar from 'LibSrc/atoms/media/Avatar'

class UserMenu extends React.Component {
  constructor (props) {
    super(props)

    this.state = {}

  }

  render () {
    const user = this.props.user;
    let full_name
    let email
    if (user !== undefined) {
      full_name = user.first_name + ' ' + user.last_name;
      email = user.email
    } else {
      full_name = "User unknown"
      email = "Email Unknown"
    }

    const trigger = (
      <span>
        <Avatar user={user}/>
      </span>
    )

    return (
        <Dropdown trigger={trigger} icon={null}>
          <Dropdown.Menu className="NavbarDropdownMenu">
            <Dropdown.Item text={full_name} />
            <Dropdown.Item text={email} disabled />
            <Divider />
            <Dropdown.Item text="Settings" as="a" href="/settings" />
            <Dropdown.Item text="Sign Out" as="a" href="/logout" />
          </Dropdown.Menu>
        </Dropdown>
    );
  }

}

UserMenu.propTypes = {
  user: PropTypes.shape({
    pk: PropTypes.number,
    username: PropTypes.string,
    email: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
  }),

}

UserMenu.defaultProps = {
  user: undefined,
  // user: {
  //   pk: 1,
  //   username: 'doej',
  //   email: 'doej@email.chop.edu',
  //   first_name: 'Jane',
  //   last_name: 'Doe',
  // }
}

export default UserMenu;
