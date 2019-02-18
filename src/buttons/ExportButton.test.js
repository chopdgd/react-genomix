import React from 'react'
import ReactDOM from 'react-dom'

import { ExportButton } from '../index'

describe('Test ExportButton', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ExportButton />, div)
  })
})
