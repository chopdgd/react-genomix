import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import { DateCell } from '../index'

describe('Test DateCell', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<DateCell rowIndex={1} date="1987-12-18" />, div)
  })

  it('initial props are set correctly as td', () => {
    const wrapper = shallow(<DateCell rowIndex={1} date="1987-12-18" />)
    expect(wrapper.props().children).toEqual('12/18/1987')
  })
})
