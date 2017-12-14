import React from 'react';
import ReactDom from 'react-dom'
import { mount } from 'enzyme'

import GenomixMenu from './GenomixMenu'

describe('Test GenomixMenu', () => {

  it('renders a <Dropdown/>', () => {
    const wrapper = mount(<GenomixMenu genomixMenuItems={[{text: 'texttest', to: 'totest'}]}/>)
    expect(wrapper.find('Dropdown')).toHaveLength(1)
  })

})
