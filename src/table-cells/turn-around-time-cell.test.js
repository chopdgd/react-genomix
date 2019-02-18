import React from 'react'
import ReactDOM from 'react-dom'

import { TurnAroundTimeProgressCell } from '../index'


describe('Test TurnAroundTimeProgressCell', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<TurnAroundTimeProgressCell target={40} />, div)
  })
})
