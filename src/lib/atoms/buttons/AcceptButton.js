import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button';


const AcceptButton = ({ ...props }) => (
  <Button
    { ...props }
  />
)


AcceptButton.propTypes = {
  content: PropTypes.string,
  icon: PropTypes.string,
  inverted: PropTypes.bool,
  color: PropTypes.string,
}

AcceptButton.defaultProps = {
  content: 'Accept',
  icon: 'checkmark',
  inverted: true,
  color: 'positive',
}

export default AcceptButton
