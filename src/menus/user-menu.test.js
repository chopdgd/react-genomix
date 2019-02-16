import React from 'react'
import ReactDOM from 'react-dom'
import { mount, shallow } from 'enzyme'

import { UserMenu } from '../index'

describe('Test UserMenu', () => {
  const element = (
    <UserMenu
      className="user-menu"
      username="doej"
      email="doej@email.chop.edu"
      name="Jane Doe"
    />
  )

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(element, div)
  })

  it('should render a <Avatar/>', () => {
    const wrapper = mount(element)
    expect(wrapper.find('Avatar')).toHaveLength(1)
  })

  it('should render a <Dropdown/>', () => {
    const wrapper = shallow(element)
    expect(wrapper.find('Dropdown')).toHaveLength(1)
  })

  it('should render a <DropdownMenu/>', () => {
    const wrapper = shallow(element)
    expect(wrapper.find('DropdownMenu')).toHaveLength(1)
  })

  it('<DropdownMenu/> should have 5 children', () => {
    const wrapper = shallow(element)
    expect(wrapper.find('DropdownMenu').props().children).toHaveLength(5)
  })
})
