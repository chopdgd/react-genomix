import React from 'react'
import PropTypes from 'prop-types'
import { Button as SemanticButton } from 'semantic-ui-react'
import cx from 'classnames'

import getUnhandledProps from 'LibSrc/helpers/getUnhandledProps'


class Button extends React.PureComponent {
  render() {
    const buttonProps = getUnhandledProps(Button, this.props)
    const { color, icon } = this.props

    return (
      <SemanticButton
        { ...buttonProps }
        className={cx(this.props.className, 'genomix', color)}
        icon={icon}
      />
    )
  }
}


Button.propTypes = {
  icon: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
}

Button.defaultProps = {}

Button.handledProps = ['className', 'icon', 'color']

export default Button
