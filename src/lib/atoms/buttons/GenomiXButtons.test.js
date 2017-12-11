import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import * as GenomiXButtons from './GenomiXButtons'


describe('Test AcceptButton', () => {
  it('AcceptButton renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GenomiXButtons.AcceptButton />, div);
  });

  it('AcceptButton props are set correctly', () => {
    const wrapper = shallow(<GenomiXButtons.AcceptButton />);
    expect(wrapper.props().content).toEqual("Accept");
    expect(wrapper.props().details).toEqual({"color": "action-positive", "icon": "checkmark"});
  })
})

describe('Test AddButton', () => {
  it('AddButton renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GenomiXButtons.AddButton />, div);
  });

  it('AddButton props are set correctly', () => {
    const wrapper = shallow(<GenomiXButtons.AddButton />);
    expect(wrapper.props().content).toEqual("Add");
    expect(wrapper.props().details).toEqual({"icon": "plus"});
  });
})

describe('Test CancelButton', () => {
  it('CancelButton renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GenomiXButtons.CancelButton />, div);
  });

  it('CancelButton props are set correctly', () => {
    const wrapper = shallow(<GenomiXButtons.CancelButton />);
    expect(wrapper.props().content).toEqual("Cancel");
    expect(wrapper.props().details).toEqual({"color": "action-negative", "icon": "dont"});
  });
})

describe('Test DownloadButton', () => {
  it('DownloadButton renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GenomiXButtons.DownloadButton />, div);
  });

  it('DownloadButton props are set correctly', () => {
    const wrapper = shallow(<GenomiXButtons.DownloadButton />);
    expect(wrapper.props().content).toEqual("Download");
    expect(wrapper.props().details).toEqual({"icon": "download"});
  });
})

describe('Test SaveButton', () => {
  it('SaveButton renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GenomiXButtons.SaveButton />, div);
  });

  it('SaveButton props are set correctly', () => {
    const wrapper = shallow(<GenomiXButtons.SaveButton />);
    expect(wrapper.props().content).toEqual("Save");
    expect(wrapper.props().details).toEqual({"icon": "save"});
  });
})

describe('Test SearchButton', () => {
  it('SearchButton renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GenomiXButtons.SearchButton />, div);
  });

  it('SearchButton props are set correctly', () => {
    const wrapper = shallow(<GenomiXButtons.SearchButton />);
    expect(wrapper.props().content).toEqual("Search");
    expect(wrapper.props().details).toEqual({"icon": "search"});
  });
})

describe('Test UploadButton', () => {
  it('UploadButton renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GenomiXButtons.UploadButton />, div);
  });

  it('UploadButton props are set correctly', () => {
    const wrapper = shallow(<GenomiXButtons.UploadButton />);
    expect(wrapper.props().content).toEqual("Upload");
    expect(wrapper.props().details).toEqual({"icon": "upload"});
  });
})
