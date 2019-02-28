import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import { AutoCompleteDropDown } from '../index'

describe('Test AutoCompleteDropDown', () => {
  const name = 'test'
  const endpoint = 'http://api.test.com/?search='
  const searchQuery = 'searchTerm'
  const searchAction = jest.fn()

  const component = <AutoCompleteDropDown name={name} endpoint={endpoint} searchAction={searchAction} options={[]} />

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(component, div)
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
    expect(searchAction).toHaveBeenLastCalledWith(searchQuery)
  })
})
