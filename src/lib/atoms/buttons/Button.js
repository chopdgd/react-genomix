import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'
import cx from 'classnames'
import { get, omit } from 'lodash'


const button = ({ ...props }) => {
  const buttonProps = omit(props, ['details', 'color', 'icon'])
  const color = get(props, 'details.color', get(props, 'color'))
  const icon = get(props, 'details.icon', get(props, 'icon'))

  return (
    <Button
      { ...buttonProps }
      className={cx(props.className, 'genomix', color)}
      icon={icon}
    />
  )
}


button.propTypes = {
  details: PropTypes.shape({
    icon: PropTypes.string,
    color: PropTypes.string,
  })
};

button.defaultProps = {
  details: undefined,
};

export default button
