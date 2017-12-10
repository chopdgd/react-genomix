import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import Icon from './Icon'


describe('Test Icon', () => {
  it('Icon renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Icon />, div);
  });

  it('Icon initial props are set correctly', () => {
    const wrapper = shallow(<Icon />);
    expect(wrapper.props().color).toBe(undefined);
    expect(wrapper.props().name).toBe(undefined);
    expect(wrapper.props().className).toBe('genomix');
  });

  it('Icon props are set correctly', () => {
    const wrapper = shallow(<Icon color="red" name="warning sign" />);
    expect(wrapper.props().color).toBe(undefined);
    expect(wrapper.props().name).toBe(undefined);
    expect(wrapper.props().className).toBe('genomix red warning sign');
  });

  it('Icon detail props are set correctly', () => {
    const wrapper = shallow(<Icon details={{ color: 'blue', icon: 'info' }} />);
    expect(wrapper.props().color).toBe(undefined);
    expect(wrapper.props().name).toBe(undefined);
    expect(wrapper.props().className).toBe('genomix blue info');
  });

  it('Icon detail props are overriding props', () => {
    const wrapper = shallow(<Icon name="dont" color="red" details={{ color: 'blue', icon: 'info' }} />);
    expect(wrapper.props().color).toBe(undefined);
    expect(wrapper.props().name).toBe(undefined);
    expect(wrapper.props().className).toBe('genomix blue info');
  });
})
