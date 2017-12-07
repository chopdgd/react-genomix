import React from 'react'
import ReactDOM from 'react-dom'
import SearchButton from './SearchButton'


it('Example renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchButton />, div);
});
