import React from 'react'
import ReactDOM from 'react-dom'
import { mount, shallow } from 'enzyme'

import { Button, UploadButton } from 'LibIndex'


describe('Test UploadButton', () => {
  it('renders without crashing', () => {
    const handleResults = jest.fn()
    const div = document.createElement('div')
    ReactDOM.render(<UploadButton handleResults={handleResults} />, div)
  });

  it('initial props are set correctly', () => {
    const handleResults = jest.fn()
    const wrapper = shallow(<UploadButton handleResults={handleResults} />)
    expect(wrapper.props().children).toEqual(<Button content="Upload" icon="upload" />)
  })

  it('props are set correctly', () => {
    const handleResults = jest.fn()
    const wrapper = shallow(
      <UploadButton
        handleResults={handleResults}
        content={<Button content="Upload Me" />}
      />
    )

    expect(wrapper.props().children).toEqual(<Button content="Upload Me" />)
  })

  it('handleResults is called when handleFiles is fired', () => {
    const handleResults = jest.fn()
    const wrapper = mount(
      <UploadButton
        handleResults={handleResults}
        content={<Button content="Upload Me" />}
      />
    )

    const fileContents = 'file contents'
    const file = new Blob([fileContents], {type : 'text/plain'})
    const readAsText = jest.fn()
    const addEventListener = jest.fn((_, evtHandler) => { evtHandler(); })
    const dummyFileReader = {addEventListener, readAsText, result: fileContents}
    window.FileReader = jest.fn(() => dummyFileReader)

    wrapper.find('input').simulate('change', {target: {files: [file]}})
    expect(FileReader).toHaveBeenCalledTimes(1)
    expect(readAsText).toHaveBeenCalledWith(file)
  })
})
