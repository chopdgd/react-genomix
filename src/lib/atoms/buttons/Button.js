import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'
import cx from 'classnames'
import { get, omit } from 'lodash';


const button = ({ ...props }) => {
  const buttonProps = omit(props, 'color')
  const color = get(props, 'color')

  return (
    <Button
      { ...buttonProps }
      className={cx(props.className, 'genomix', color)}
    />
  )
}


button.propTypes = {
  content: PropTypes.string,
  icon: PropTypes.string,
  inverted: PropTypes.bool,
  color: PropTypes.string,
}

button.defaultProps = {
  content: undefined,
  icon: undefined,
  inverted: false,
}

export default button
