import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import * as GenomiX from '../../index'


describe('Test AcceptIcon', () => {
  it('AcceptIcon renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<GenomiX.AcceptIcon />, div)
  })

  it('AcceptIcon props are set correctly', () => {
    const wrapper = shallow(<GenomiX.AcceptIcon />)
    expect(wrapper.props().color).toEqual('action-positive')
    expect(wrapper.props().icon).toEqual('checkmark')
  })
})

describe('Test AddIcon', () => {
  it('AddIcon renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<GenomiX.AddIcon />, div)
  })

  it('AddIcon props are set correctly', () => {
    const wrapper = shallow(<GenomiX.AddIcon />)
    expect(wrapper.props().color).toEqual(undefined)
    expect(wrapper.props().icon).toEqual('plus')
  })
})

describe('Test CancelIcon', () => {
  it('CancelIcon renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<GenomiX.CancelIcon />, div)
  })

  it('CancelIcon props are set correctly', () => {
    const wrapper = shallow(<GenomiX.CancelIcon />)
    expect(wrapper.props().color).toEqual('action-negative')
    expect(wrapper.props().icon).toEqual('dont')
  })
})

describe('Test DownloadIcon', () => {
  it('DownloadIcon renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<GenomiX.DownloadIcon />, div)
  })

  it('DownloadIcon props are set correctly', () => {
    const wrapper = shallow(<GenomiX.DownloadIcon />)
    expect(wrapper.props().color).toEqual(undefined)
    expect(wrapper.props().icon).toEqual('download')
  })
})

describe('Test ExternalIcon', () => {
  it('DownloadIcon renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<GenomiX.ExternalIcon />, div)
  })

  it('DownloadIcon props are set correctly', () => {
    const wrapper = shallow(<GenomiX.ExternalIcon />)
    expect(wrapper.props().color).toEqual(undefined)
    expect(wrapper.props().icon).toEqual('external')
  })
})

describe('Test FemaleIcon', () => {
  it('FemaleIcon renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<GenomiX.FemaleIcon />, div)
  })

  it('FemaleIcon props are set correctly', () => {
    const wrapper = shallow(<GenomiX.FemaleIcon />)
    expect(wrapper.props().color).toEqual('pink')
    expect(wrapper.props().icon).toEqual('female')
  })
})

describe('Test InfoIcon', () => {
  it('InfoIcon renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<GenomiX.InfoIcon />, div)
  })

  it('InfoIcon props are set correctly', () => {
    const wrapper = shallow(<GenomiX.InfoIcon />)
    expect(wrapper.props().color).toEqual(undefined)
    expect(wrapper.props().icon).toEqual('info circle')
  })
})

describe('Test MaleIcon', () => {
  it('MaleIcon renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<GenomiX.MaleIcon />, div)
  })

  it('MaleIcon props are set correctly', () => {
    const wrapper = shallow(<GenomiX.MaleIcon />)
    expect(wrapper.props().color).toEqual('light-blue')
    expect(wrapper.props().icon).toEqual('male')
  })
})

describe('Test ManualIcon', () => {
  it('ManualIcon renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<GenomiX.ManualIcon />, div)
  })

  it('ManualIcon props are set correctly', () => {
    const wrapper = shallow(<GenomiX.ManualIcon />)
    expect(wrapper.props().color).toEqual(undefined)
    expect(wrapper.props().icon).toEqual('write')
  })
})

describe('Test QuestionIcon', () => {
  it('QuestionIcon renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<GenomiX.QuestionIcon />, div)
  })

  it('QuestionIcon props are set correctly', () => {
    const wrapper = shallow(<GenomiX.QuestionIcon />)
    expect(wrapper.props().color).toEqual(undefined)
    expect(wrapper.props().icon).toEqual('help')
  })
})

describe('Test SaveIcon', () => {
  it('SaveIcon renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<GenomiX.SaveIcon />, div)
  })

  it('SaveIcon props are set correctly', () => {
    const wrapper = shallow(<GenomiX.SaveIcon />)
    expect(wrapper.props().color).toEqual('action-positive')
    expect(wrapper.props().icon).toEqual('save')
  })
})

describe('Test SearchIcon', () => {
  it('SearchIcon renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<GenomiX.SearchIcon />, div)
  })

  it('SearchIcon props are set correctly', () => {
    const wrapper = shallow(<GenomiX.SearchIcon />)
    expect(wrapper.props().color).toEqual(undefined)
    expect(wrapper.props().icon).toEqual('search')
  })
})

describe('Test UploadIcon', () => {
  it('UploadIcon renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<GenomiX.UploadIcon />, div)
  })

  it('UploadIcon props are set correctly', () => {
    const wrapper = shallow(<GenomiX.UploadIcon />)
    expect(wrapper.props().color).toEqual(undefined)
    expect(wrapper.props().icon).toEqual('upload')
  })
})

describe('Test WarningIcon', () => {
  it('WarningIcon renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<GenomiX.WarningIcon />, div)
  })

  it('WarningIcon props are set correctly', () => {
    const wrapper = shallow(<GenomiX.WarningIcon />)
    expect(wrapper.props().color).toEqual('action-warning')
    expect(wrapper.props().icon).toEqual('warning sign')
  })
})
