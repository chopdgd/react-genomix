import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button';


const CancelButton = ({ ...props }) => (
  <Button
    { ...props }
  />
)


CancelButton.propTypes = {
  content: PropTypes.string,
  icon: PropTypes.string,
  inverted: PropTypes.bool,
  color: PropTypes.string,
}

CancelButton.defaultProps = {
  content: 'Cancel',
  icon: 'cancel',
  inverted: true,
  color: 'negative',
}

export default CancelButton
