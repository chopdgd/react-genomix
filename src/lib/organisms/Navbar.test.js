import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import Navbar from './Navbar'

describe('Navbar', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Navbar />, div)
  })

  let wrapper
  beforeEach(() => {
    wrapper = mount(<Navbar />)
  })
  it('should render a <GenomixMenu>', () => {
    expect(wrapper.find('GenomixMenu')).toHaveLength(1)
  })
  it('should render a <Avatar>', () => {
    expect(wrapper.find('Avatar')).toHaveLength(1)
  });
  it('should render a <CHOPLogo>', () => {
    expect(wrapper.find('CHOPLogo')).toHaveLength(1)
  });
});
