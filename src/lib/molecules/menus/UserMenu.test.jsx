import React from 'react';
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'

import UserMenu from './UserMenu'

describe('Test UserMenu', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<UserMenu />, div)
  });

  it('renders without crashing if user undefined', () => {
    const div = document.createElement('div')
    const user = undefined
    ReactDOM.render(<UserMenu user={user} />, div)
  });

  it('should render a <Avatar/>', () => {
    const wrapper = mount(<UserMenu />)
    expect(wrapper.find('Avatar')).toHaveLength(1)
  });

  it('should render a <Avatar/> if user is undefined', () => {
    const wrapper = mount(<UserMenu />);
    wrapper.setProps({user: undefined});
    expect(wrapper.find('Avatar')).toHaveLength(1);
  })

  it('should render a <Avatar/> if name of user is missing', () => {
    const wrapper = mount(<UserMenu />);
    wrapper.setProps({user: {pk: 1, username: "testuser"}});
    expect(wrapper.find('Avatar')).toHaveLength(1);
  })
})
