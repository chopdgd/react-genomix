import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Icon } from 'semantic-ui-react'


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
  const {
    activeItem,
    children,
    logo,
    subMenu,
    userMenu,
    navCallback
  } = props

  const items = React.Children.map(children, item =>
    React.cloneElement(item, {
      active: activeItem === item.props.name,
    })
  )

  return (
    <Menu className="navbar" borderless>
      <Menu.Item>
        <Icon name='angle right' size='large' link onClick={navCallback} />
      </Menu.Item>
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
  navCallback: PropTypes.func,
}

Navbar.defaultProps = {
  activeItem: '',
}


export default Navbar
