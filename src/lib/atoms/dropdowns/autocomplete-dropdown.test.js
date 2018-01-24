import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import { AutoCompleteDropDown } from 'LibIndex'


describe('Test AutoCompleteDropDown', () => {
  const name = 'test'
  const endpoint = 'http://api.test.com/?search='
  const searchQuery = 'searchTerm'
  const mockSearch = `${endpoint}${searchQuery}`

  const searchAction = jest.fn()
  searchAction.mockReturnValue(mockSearch)

  const component = (
    <AutoCompleteDropDown
      name={name}
      endpoint={endpoint}
      searchAction={searchAction}
      options={[]}
    />
  )

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(component, div)
  })

  it('default state is set correctly', () => {
    const wrapper = shallow(component)
    expect(wrapper.instance().state.loading).toEqual(false)
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
