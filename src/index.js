import React from 'react';
import { render } from "react-dom";

import App from './demo/index'
import './stylesheets/main.scss'


const theRoot = document.getElementById('root')

render(<App />, theRoot)

if (module.hot) {
  module.hot.accept('./demo', () => {
    const NextApp = require('./demo').default
    render(<NextApp />, theRoot)
  })
}
