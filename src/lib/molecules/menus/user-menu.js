import React from 'react'
import PropTypes from 'prop-types'
import { Dropdown, Divider } from 'semantic-ui-react'

import * as customPropTypes from 'LibSrc/helpers/customPropTypes'
import { Avatar } from 'LibIndex'


const UserMenu = props => {
  const { email, linksAs, name, profileImage } = props

  return (
      <Dropdown
        trigger={<Avatar profileImage={profileImage} />}
        icon={null}
      >
        <Dropdown.Menu
          className="NavbarDropdownMenu"
        >
          <Dropdown.Item text={name} />
          <Dropdown.Item text={email} disabled />
          <Divider />
          <Dropdown.Item text="Settings" as={linksAs} to="settings" href="settings" />
          <Dropdown.Item text="Sign Out" as={linksAs} to="logoff" href="logoff" />
        </Dropdown.Menu>
      </Dropdown>
  )
}


UserMenu.propTypes = {
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  profileImage: PropTypes.string,
  linksAs: customPropTypes.as,  // This is to allow the option to pass in NavLink from react-router
}

UserMenu.defaultProps = {
  linksAs: 'a',
}


export default UserMenu
