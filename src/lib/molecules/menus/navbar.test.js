import React from 'react'
import ReactDOM from 'react-dom'
import { MenuItem } from 'semantic-ui-react'
import { shallow } from 'enzyme'

import { Navbar, UserMenu } from 'LibIndex'


describe('Navbar Tests', () => {
  const element = (
    <Navbar>
      <MenuItem id="test" name="test" />
    </Navbar>
  )

  let wrapper
  beforeEach(() => {
    wrapper = shallow(element)
  })

  it('should render without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(element, div)
  })

  it('should render correct elements', () => {
    expect(wrapper.find('MenuMenu')).toHaveLength(1)
    expect(wrapper.find('MenuItem')).toHaveLength(1)
  })

  it('should render userMenu if passed', () => {
    const userMenu = (
      <UserMenu
        className="user-menu"
        username="doej"
        email="doej@email.chop.edu"
        name="Jane Doe"
      />
    )
    const element = (
      <Navbar
        userMenu={userMenu}
      >
        <MenuItem id="test" name="test" />
      </Navbar>
    )

    const submenuWrapper = shallow(element)
    expect(submenuWrapper.find('MenuItem')).toHaveLength(2)
  })

  it('should render subMenu if passed', () => {
    const userMenu = (
      <UserMenu
        className="user-menu"
        username="doej"
        email="doej@email.chop.edu"
        name="Jane Doe"
      />
    )
    const element = (
      <Navbar
        subMenu={userMenu}
      >
        <MenuItem id="test" name="test" />
      </Navbar>
    )

    const submenuWrapper = shallow(element)
    expect(submenuWrapper.find('MenuItem')).toHaveLength(2)
  })

  it('should render logo if passed', () => {
    const userMenu = (
      <UserMenu
        className="user-menu"
        username="doej"
        email="doej@email.chop.edu"
        name="Jane Doe"
      />
    )
    const element = (
      <Navbar
        logo={userMenu}
      >
        <MenuItem id="test" name="test" />
      </Navbar>
    )

    const submenuWrapper = shallow(element)
    expect(submenuWrapper.find('MenuItem')).toHaveLength(2)
  })

  it('should render subMenu and userMenu if passed', () => {
    const userMenu = (
      <UserMenu
        className="user-menu"
        username="doej"
        email="doej@email.chop.edu"
        name="Jane Doe"
      />
    )
    const element = (
      <Navbar
        userMenu={userMenu}
        subMenu={userMenu}
      >
        <MenuItem id="test" name="test" />
      </Navbar>
    )

    const submenuWrapper = shallow(element)
    expect(submenuWrapper.find('MenuItem')).toHaveLength(3)
  })
})
