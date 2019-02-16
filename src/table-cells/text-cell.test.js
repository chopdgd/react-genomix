import React from 'react'
import ReactDOM from 'react-dom'

import { TextCell } from '../index'


describe('Test TextCell', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<TextCell rowIndex={1} content="hi" />, div)
  })
})
