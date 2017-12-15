import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import AutoCompleteDropDown from './autocomplete-dropdown'


describe('Test AutoCompleteDropDown', () => {
  const name = 'test'
  const value = 'testValue'
  const endpoint = 'http://api.test.com/?search='
  const searchQuery = 'searchTerm'
  const mockSearch = `${endpoint}${searchQuery}`

  const onChange = jest.fn()
  onChange.mockReturnValue({ name , value })

  const searchAction = jest.fn()
  searchAction.mockReturnValue(mockSearch)

  const component = (
    <AutoCompleteDropDown
      name={name}
      endpoint={endpoint}
      onChange={onChange}
      searchAction={searchAction}
    />
  )

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(component, div)
  })

  it('default props are set correctly', () => {
    const wrapper = shallow(component)
    expect(wrapper.instance().props.endpoint).toEqual(endpoint)
    expect(wrapper.instance().props.onChange).toEqual(onChange)
    expect(wrapper.instance().props.searchAction).toEqual(searchAction)
    expect(wrapper.instance().props.waitInterval).toEqual(750)
    expect(wrapper.instance().props.loading).toEqual(false)
    expect(wrapper.instance().props.options).toEqual([])
  })

  it('default state is set correctly', () => {
    const wrapper = shallow(component)
    expect(wrapper.instance().state.loading).toEqual(false)
    expect(wrapper.instance().state.options).toEqual([])
    expect(wrapper.instance().state.value).toEqual('')
  })

  it('componentWillReceiveProps correctly sets loading correctly', () => {
    const wrapper = shallow(component)

    expect(wrapper.instance().state.loading).toEqual(false)
    wrapper.setProps({ loading: false })
    expect(wrapper.instance().state.loading).toEqual(false)

    wrapper.setProps({ loading: true })
    expect(wrapper.instance().state.loading).toEqual(true)

    wrapper.setProps({ loading: false })
    expect(wrapper.instance().state.loading).toEqual(false)
  })

  it('componentWillReceiveProps correctly sets options correctly', () => {
    const wrapper = shallow(component)
    const options = [{ key: 'key', value: 'value', text: 'text' }]

    expect(wrapper.instance().state.options).toEqual([])

    wrapper.setProps({ options })
    expect(wrapper.instance().state.options).toEqual(options)
  })

  it('componentWillReceiveProps correctly adds new options and doesnt duplicate options', () => {
    const wrapper = shallow(component)
    const options = [{ key: 'key', value: 'value', text: 'text' }]

    expect(wrapper.instance().state.options).toEqual([])

    wrapper.setProps({ options })
    expect(wrapper.instance().state.options).toEqual(options)

    wrapper.setProps({ options })
    expect(wrapper.instance().state.options).toEqual(options)
  })

  it('change in dropdown calls onChange and sets state with value', () => {
    const wrapper = shallow(component)
    const instance = wrapper.instance()
    const setStateSpy = jest.spyOn(instance, 'setState')
    const data = { name, value }
    const event = {target: data}
    wrapper.find('Dropdown').simulate('change', event, data)
    expect(onChange).toHaveBeenCalledWith(data)
    expect(setStateSpy).toHaveBeenCalledWith({ value })
  })

  it('onSearchChange sets loading = true', () => {
    const wrapper = shallow(component)
    const instance = wrapper.instance()
    const setStateSpy = jest.spyOn(instance, 'setState')
    const data = { searchQuery }
    const event = { target: data }
    wrapper.props().onSearchChange(event, data)
    expect(setStateSpy).toHaveBeenCalledWith({ loading: true })
  })

  it('onSearchChange calls searchAction after timeout', () => {
    jest.useFakeTimers()
    const wrapper = shallow(component)
    const data = { searchQuery }
    const event = { target: data }
    wrapper.props().onSearchChange(event, data)
    expect(setTimeout).toHaveBeenCalledTimes(1)
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 750)
    expect(searchAction).toHaveBeenCalledTimes(0)

    jest.runAllTimers()
    expect(searchAction).toHaveBeenCalledTimes(1)
    expect(searchAction).toHaveBeenLastCalledWith(mockSearch)
  })
})
