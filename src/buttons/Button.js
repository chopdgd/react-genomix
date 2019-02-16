import React from 'react'
import PropTypes from 'prop-types'
import { Button as SemanticButton } from 'semantic-ui-react'
import cx from 'classnames'

import getUnhandledProps from '../helpers/getUnhandledProps'


const Button = props => {
  const buttonProps = getUnhandledProps(Button, props)
  const { className, color, icon } = props

  return (
    <SemanticButton
      { ...buttonProps }
      className={cx(className, 'genomix', color)}
      icon={icon}
    />
  )
}


Button.propTypes = {
  icon: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
}

Button.defaultProps = {}

Button.handledProps = ['className', 'icon', 'color']


export default Button
