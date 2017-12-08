import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button';


const FilterButton = ({ ...props }) => (
  <Button
    { ...props }
  />
)


FilterButton.propTypes = {
  content: PropTypes.string,
  icon: PropTypes.string,
}

FilterButton.defaultProps = {
  content: 'Filter',
  icon: 'filter',
}

export default FilterButton
