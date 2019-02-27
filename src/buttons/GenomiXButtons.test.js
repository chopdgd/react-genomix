import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import * as GenomiX from '../index'

describe('Test AcceptButton', () => {
  it('AcceptButton renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<GenomiX.AcceptButton />, div)
  })

  it('AcceptButton props are set correctly', () => {
    const wrapper = shallow(<GenomiX.AcceptButton />)
    expect(wrapper.props().content).toEqual('Accept')
    expect(wrapper.props().color).toEqual('action-positive')
    expect(wrapper.props().icon).toEqual('checkmark')
  })
})

describe('Test AddButton', () => {
  it('AddButton renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<GenomiX.AddButton />, div)
  })

  it('AddButton props are set correctly', () => {
    const wrapper = shallow(<GenomiX.AddButton />)
    expect(wrapper.props().content).toEqual('Add')
    expect(wrapper.props().color).toEqual(undefined)
    expect(wrapper.props().icon).toEqual('plus')
  })
})

describe('Test CancelButton', () => {
  it('CancelButton renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<GenomiX.CancelButton />, div)
  })

  it('CancelButton props are set correctly', () => {
    const wrapper = shallow(<GenomiX.CancelButton />)
    expect(wrapper.props().content).toEqual('Cancel')
    expect(wrapper.props().color).toEqual('action-negative')
    expect(wrapper.props().icon).toEqual('dont')
  })
})

describe('Test DownloadButton', () => {
  it('DownloadButton renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<GenomiX.DownloadButton />, div)
  })

  it('DownloadButton props are set correctly', () => {
    const wrapper = shallow(<GenomiX.DownloadButton />)
    expect(wrapper.props().content).toEqual('Download')
    expect(wrapper.props().color).toEqual(undefined)
    expect(wrapper.props().icon).toEqual('download')
  })
})

describe('Test SaveButton', () => {
  it('SaveButton renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<GenomiX.SaveButton />, div)
  })

  it('SaveButton props are set correctly', () => {
    const wrapper = shallow(<GenomiX.SaveButton />)
    expect(wrapper.props().content).toEqual('Save')
    expect(wrapper.props().color).toEqual('action-positive')
    expect(wrapper.props().icon).toEqual('save')
  })
})

describe('Test SearchButton', () => {
  it('SearchButton renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<GenomiX.SearchButton />, div)
  })

  it('SearchButton props are set correctly', () => {
    const wrapper = shallow(<GenomiX.SearchButton />)
    expect(wrapper.props().content).toEqual('Search')
    expect(wrapper.props().color).toEqual(undefined)
    expect(wrapper.props().icon).toEqual('search')
  })
})
