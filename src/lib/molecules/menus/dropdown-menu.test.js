import React from 'react'
import ReactDOM from 'react-dom'
import { DropdownItem } from 'semantic-ui-react'
import { shallow } from 'enzyme'

import { DropdownMenu } from '../../index'


describe('Test DropdownMenu', () => {
  const element = (
    <DropdownMenu>
      <DropdownItem text="test" name="test" />
    </DropdownMenu>
  )

  it('should render without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(element, div)
  })

  it('renders correct elements', () => {
    const wrapper = shallow(element)
    expect(wrapper.find('Dropdown')).toHaveLength(1)
    expect(wrapper.find('DropdownMenu')).toHaveLength(1)
    expect(wrapper.find('DropdownItem')).toHaveLength(1)
  })
})
