import React from 'react'
import PropTypes from 'prop-types'
import { Icon as SemanticIcon } from 'semantic-ui-react'
import cx from 'classnames'

import getUnhandledProps from '../../helpers/getUnhandledProps'


const Icon = props => {
  const iconProps = getUnhandledProps(Icon, props)
  const { className, color, icon } = props

  return (
    <SemanticIcon
      { ...iconProps }
      className={cx(className, 'genomix', color, icon)}
    />
  )
}


Icon.propTypes = {
  icon: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
}

Icon.defaultProps = {}

Icon.handledProps = ['className', 'icon', 'color']


export default Icon
