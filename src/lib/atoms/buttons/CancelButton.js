import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'


const CancelButton = ({ ...props }) => (
  <Button { ...props } />
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
  color: 'red',
}

export default CancelButton
