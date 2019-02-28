import React from 'react'
import ReactDOM from 'react-dom'

import { RatingPopup } from '../index'

describe('Test Rating Popup', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<RatingPopup database="database" value="value" url="url" />, div)
  })
})
