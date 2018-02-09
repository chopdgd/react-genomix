import React from 'react'
import PropTypes from 'prop-types'
import { Menu } from 'semantic-ui-react'


const renderSubMenu = element => {
  if (element) {
    return (
      <Menu.Item>
        {element}
      </Menu.Item>
    )
  }
}


const Navbar = props => {
  const { activeItem, children, logo, subMenu, userMenu } = props

  const items = React.Children.map(children, item =>
    React.cloneElement(item, {
      active: activeItem === item.props.name,
    })
  )

  return (
    <Menu className="navbar" borderless>

      {renderSubMenu(logo)}
      {renderSubMenu(subMenu)}

      <Menu.Menu position='right'>
        {items}
        {renderSubMenu(userMenu)}
      </Menu.Menu>

    </Menu>
  )
}

Navbar.propTypes = {
  activeItem: PropTypes.string,
  children: PropTypes.any.isRequired,
  logo: PropTypes.node,
  subMenu: PropTypes.node,
  userMenu: PropTypes.node,
}

Navbar.defaultProps = {
  activeItem: '',
}


export default Navbar
