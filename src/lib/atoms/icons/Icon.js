import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'semantic-ui-react'
import cx from 'classnames'
import { get, omit } from 'lodash'


const icon = ({ ...props }) => {
  const iconProps = omit(props, ['details', 'color', 'name'])
  const color = get(props, 'details.color', get(props, 'color'))
  const name = get(props, 'details.icon', get(props, 'name'))

  return (
    <Icon
      { ...iconProps }
      className={cx(props.className, 'genomix', color, name)}
    />
  )
}


icon.propTypes = {
  details: PropTypes.shape({
    icon: PropTypes.string,
    color: PropTypes.string,
  })
};

icon.defaultProps = {
  details: undefined,
};


export default icon;
