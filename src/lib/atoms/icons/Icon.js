import React from 'react'
import PropTypes from 'prop-types'
import { Icon as SemanticIcon } from 'semantic-ui-react'
import cx from 'classnames'
import { get, omit } from 'lodash'


const Icon = ({ ...props }) => {
  const iconProps = omit(props, ['details', 'color', 'name'])
  const color = get(props, 'details.color', get(props, 'color'))
  const name = get(props, 'details.icon', get(props, 'name'))

  return (
    <SemanticIcon
      {...iconProps}
      className={cx(props.className, 'genomix', color, name)}
    />
  )
}


Icon.propTypes = {
  details: PropTypes.shape({
    icon: PropTypes.string,
    color: PropTypes.string,
  })
}

Icon.defaultProps = {
  details: undefined,
}


export default Icon
