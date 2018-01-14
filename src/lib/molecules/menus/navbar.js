import React from 'react'
import PropTypes from 'prop-types'
import { Menu } from 'semantic-ui-react'

import { Logo } from 'LibIndex'


class Navbar extends React.PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      activeItem: props.activeItem,
    }
  }

  handleItemClick = (e, { name }) => {
    this.setState({
      activeItem: name
    })
  }

  renderChildren = () => {
    const { activeItem } = this.state
    const { children } = this.props

    return React.Children.map(children, (item: React.ReactElement<ItemPropsInternal>) =>
      React.cloneElement(item, {
        active: activeItem === item.props.name,
        onClick: this.handleItemClick,
      })
    )
  }

  renderSubMenu = element => {
    if (element) {
      return (
        <Menu.Item>
          {element}
        </Menu.Item>
      )
    }
  }

  render () {
    const { logo, subMenu, userMenu } = this.props

    return (
      <Menu className="navbar" borderless>

        {this.renderSubMenu(subMenu)}

        <Menu.Item>
          {logo}
        </Menu.Item>

        <Menu.Menu position='right'>
          {this.renderChildren()}
          {this.renderSubMenu(userMenu)}
        </Menu.Menu>

      </Menu>
    )
  }
}

Navbar.propTypes = {
  children: PropTypes.any.isRequired,
  activeItem: PropTypes.string,
  logo: PropTypes.node.isRequired,
  subMenu: PropTypes.node,
  userMenu: PropTypes.node,
}

Navbar.defaultProps = {
  activeItem: '',
  logo: <Logo />
}

export default Navbar
