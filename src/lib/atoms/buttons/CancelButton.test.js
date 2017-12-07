import React from 'react'
import ReactDOM from 'react-dom'
import CancelButton from './CancelButton'


it('Example renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CancelButton />, div);
});
