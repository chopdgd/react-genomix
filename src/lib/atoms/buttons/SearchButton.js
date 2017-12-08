import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button';


const SearchButton = ({ ...props }) => (
  <Button
    { ...props }
  />
)


SearchButton.propTypes = {
  content: PropTypes.string,
  icon: PropTypes.string,
}

SearchButton.defaultProps = {
  content: 'Search',
  icon: 'search',
}

export default SearchButton
