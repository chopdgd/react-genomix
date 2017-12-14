import React from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'

import Button from './Button'
import UploadButton from './UploadButton'


describe('Test UploadButton', () => {
  it('UploadButton renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<UploadButton />, div);
  });

  it('UploadButton initial props are set correctly', () => {
    const wrapper = mount(<UploadButton />);
    expect(wrapper.props().content).toEqual(<Button content="Upload" icon="upload" color="light-blue" />);
  });

  it('UploadButton props are set correctly', () => {
    const wrapper = mount(
      <UploadButton
        content="Upload Me"
      />
    );

    expect(wrapper.props().content).toEqual('Upload Me')
  });
})
