import React from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'

import Button from './Button'
import UploadButton from './UploadButton'


describe('Test UploadButton', () => {
  it('UploadButton renders without crashing', () => {
    const handleResults = jest.fn()
    const div = document.createElement('div');
    ReactDOM.render(<UploadButton handleResults={handleResults} />, div);
  });

  it('UploadButton initial props are set correctly', () => {
    const handleResults = jest.fn()
    const wrapper = mount(<UploadButton handleResults={handleResults} />);
    expect(wrapper.props().content).toEqual(<Button content="Upload" icon="upload" color="light-blue" />);
  });

  it('UploadButton props are set correctly', () => {
    const handleResults = jest.fn()
    const wrapper = mount(
      <UploadButton
        handleResults={handleResults}
        content={<Button content="Upload Me" />}
      />
    );

    expect(wrapper.props().content).toEqual(<Button content="Upload Me" />)
  });
})
