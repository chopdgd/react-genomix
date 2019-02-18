import React from 'react'
import PropTypes from 'prop-types'
import { Dropdown, Icon } from 'semantic-ui-react'

const DropdownMenu = props => {
  const { children } = props

  return (
    <Dropdown trigger={<Icon name="sidebar" size="large" />} icon={null}>
      <Dropdown.Menu className="NavbarDropdownMenu">{children}</Dropdown.Menu>
    </Dropdown>
  )
}

DropdownMenu.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
}

DropdownMenu.defaultProps = {}

export default DropdownMenu
