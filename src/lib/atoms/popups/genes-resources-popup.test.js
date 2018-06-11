import React from 'react'
import ReactDOM from 'react-dom'

import { GeneResourcesPopup } from 'LibIndex'


describe('Test Gene Resources Popup', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<GeneResourcesPopup trigger={<p>Gene</p>} genes={[{symbol: 'Gene'}]}/>, div)
  })
})
