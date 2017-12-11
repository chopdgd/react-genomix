import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import * as GenomiXIcons from './GenomiXIcons'


describe('Test AcceptIcon', () => {
  it('AcceptIcon renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GenomiXIcons.AcceptIcon />, div);
  });

  it('AcceptIcon props are set correctly', () => {
    const wrapper = shallow(<GenomiXIcons.AcceptIcon />);
    expect(wrapper.props().details).toEqual({"color": "action-positive", "icon": "checkmark"});
  });
})

describe('Test AddIcon', () => {
  it('AddIcon renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GenomiXIcons.AddIcon />, div);
  });

  it('AddIcon props are set correctly', () => {
    const wrapper = shallow(<GenomiXIcons.AddIcon />);
    expect(wrapper.props().details).toEqual({"icon": "plus"});
  });
})

describe('Test CancelIcon', () => {
  it('CancelIcon renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GenomiXIcons.CancelIcon />, div);
  });

  it('CancelIcon props are set correctly', () => {
    const wrapper = shallow(<GenomiXIcons.CancelIcon />);
    expect(wrapper.props().details).toEqual({"color": "action-negative", "icon": "dont"});
  });
})

describe('Test DownloadIcon', () => {
  it('DownloadIcon renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GenomiXIcons.DownloadIcon />, div);
  });

  it('DownloadIcon props are set correctly', () => {
    const wrapper = shallow(<GenomiXIcons.DownloadIcon />);
    expect(wrapper.props().details).toEqual({"icon": "download"});
  });
})

describe('Test FemaleIcon', () => {
  it('FemaleIcon renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GenomiXIcons.FemaleIcon />, div);
  });

  it('FemaleIcon props are set correctly', () => {
    const wrapper = shallow(<GenomiXIcons.FemaleIcon />);
    expect(wrapper.props().details).toEqual({"icon": "female", "color": "pink"});
  });
})

describe('Test InfoIcon', () => {
  it('InfoIcon renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GenomiXIcons.InfoIcon />, div);
  });

  it('InfoIcon props are set correctly', () => {
    const wrapper = shallow(<GenomiXIcons.InfoIcon />);
    expect(wrapper.props().details).toEqual({"icon": "info circle"});
  });
})

describe('Test MaleIcon', () => {
  it('MaleIcon renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GenomiXIcons.MaleIcon />, div);
  });

  it('MaleIcon props are set correctly', () => {
    const wrapper = shallow(<GenomiXIcons.MaleIcon />);
    expect(wrapper.props().details).toEqual({"icon": "male", "color": "light-blue"});
  });
})

describe('Test ManualIcon', () => {
  it('ManualIcon renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GenomiXIcons.ManualIcon />, div);
  });

  it('ManualIcon props are set correctly', () => {
    const wrapper = shallow(<GenomiXIcons.ManualIcon />);
    expect(wrapper.props().details).toEqual({"icon": "write"});
  });
})

describe('Test QuestionIcon', () => {
  it('QuestionIcon renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GenomiXIcons.QuestionIcon />, div);
  });

  it('QuestionIcon props are set correctly', () => {
    const wrapper = shallow(<GenomiXIcons.QuestionIcon />);
    expect(wrapper.props().details).toEqual({"icon": "help"});
  });
})

describe('Test SaveIcon', () => {
  it('SaveIcon renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GenomiXIcons.SaveIcon />, div);
  });

  it('SaveIcon props are set correctly', () => {
    const wrapper = shallow(<GenomiXIcons.SaveIcon />);
    expect(wrapper.props().details).toEqual({"action-positive", "icon": "save"});
  });
})

describe('Test SearchIcon', () => {
  it('SearchIcon renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GenomiXIcons.SearchIcon />, div);
  });

  it('SearchIcon props are set correctly', () => {
    const wrapper = shallow(<GenomiXIcons.SearchIcon />);
    expect(wrapper.props().details).toEqual({"icon": "search"});
  });
})

describe('Test UploadIcon', () => {
  it('UploadIcon renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GenomiXIcons.UploadIcon />, div);
  });

  it('UploadIcon props are set correctly', () => {
    const wrapper = shallow(<GenomiXIcons.UploadIcon />);
    expect(wrapper.props().details).toEqual({"icon": "upload"});
  });
})

describe('Test WarningIcon', () => {
  it('WarningIcon renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GenomiXIcons.WarningIcon />, div);
  });

  it('WarningIcon props are set correctly', () => {
    const wrapper = shallow(<GenomiXIcons.WarningIcon />);
    expect(wrapper.props().details).toEqual({"icon": "warning sign", "color": "action-warning"});
  });
})
