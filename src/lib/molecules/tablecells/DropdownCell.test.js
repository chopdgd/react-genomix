import React from 'react'
import ReactDOM from 'react-dom'
import { Dropdown } from 'semantic-ui-react'
import { mount } from 'enzyme'

import DropdownCell from './DropdownCell'

const TextDropdownCell = ({...props}) => {
  return (
    <DropdownCell
      {...props}
      dropdown={<Dropdown options={[{'key': 1, 'value': 1, 'text': 'option 1'}]}/>}
    />
  );
}

describe('Test DropdownCell', () => {
  it('DropdownCell renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(TextDropdownCell(), div)
  })

  // it('DropdownCell initial props are set correctly', () => {
  //   const wrapper = mount(TextDropdownCell())
  //   expect(wrapper.find('DropdownCell').props().dropdown).toEqual(['test'])
  // })
})
