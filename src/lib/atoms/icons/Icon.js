import React from 'react'
import PropTypes from 'prop-types'
import { Icon as SemanticIcon } from 'semantic-ui-react'
import cx from 'classnames'

import getUnhandledProps from 'LibSrc/helpers/getUnhandledProps'


class Icon extends React.PureComponent {
  render() {
    const iconProps = getUnhandledProps(Icon, this.props)
    const { color, icon } = this.props

    return (
      <SemanticIcon
        {...iconProps}
        className={cx(this.props.className, 'genomix', color, icon)}
      />
    )
  }
}


Icon.propTypes = {
  icon: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
}

Icon.defaultProps = {}

Icon.handledProps = ['className', 'icon', 'color']

export default Icon
