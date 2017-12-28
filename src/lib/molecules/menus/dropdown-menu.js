import React from 'react'
import PropTypes from 'prop-types'
import { Dropdown, Icon } from 'semantic-ui-react'


class DropdownMenu extends React.PureComponent {
  render() {
    const { children } = this.props

    return (
      <Dropdown
        trigger={<Icon name="sidebar" size="large" />}
        icon={null}
      >
        <Dropdown.Menu className="NavbarDropdownMenu">
          {children}
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}


DropdownMenu.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
}

DropdownMenu.defaultProps = {}

export default DropdownMenu
