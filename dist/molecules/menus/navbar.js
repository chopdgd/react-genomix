import React from"react";import{Menu,Icon}from"semantic-ui-react";var renderSubMenu=function(a){if(a)return React.createElement(Menu.Item,null,a)},Navbar=function(a){var b=a.activeItem,c=a.children,d=a.logo,e=a.subMenu,f=a.userMenu,g=a.navCallback,h=React.Children.map(c,function(a){return React.cloneElement(a,{active:b===a.props.name})});return React.createElement(Menu,{className:"navbar",borderless:!0},React.createElement(Menu.Item,null,React.createElement(Icon,{name:"angle right",size:"large",link:!0,onClick:g})),renderSubMenu(d),renderSubMenu(e),React.createElement(Menu.Menu,{position:"right"},h,renderSubMenu(f)))};Navbar.defaultProps={activeItem:""};export default Navbar;