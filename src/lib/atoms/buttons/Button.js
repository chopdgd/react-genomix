import React from 'react'
import PropTypes from 'prop-types'
import { Button as SemanticButton } from 'semantic-ui-react'
import cx from 'classnames'
import { get, omit } from 'lodash'


const Button = ({ ...props }) => {
  const buttonProps = omit(props, ['details', 'color', 'icon'])
  const color = get(props, 'details.color', get(props, 'color'))
  const icon = get(props, 'details.icon', get(props, 'icon'))

  return (
    <SemanticButton
      { ...buttonProps }
      className={cx(props.className, 'genomix', color)}
      icon={icon}
    />
  )
}


Button.propTypes = {
  details: PropTypes.shape({
    icon: PropTypes.string,
    color: PropTypes.string,
  })
}

Button.defaultProps = {
  details: undefined,
}

export default Button
