import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'


const AcceptButton = ({ ...props }) => (
  <Button { ...props } />
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
  color: 'green',
}

export default AcceptButton
