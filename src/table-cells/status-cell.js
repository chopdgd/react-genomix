import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'semantic-ui-react'

import * as customPropTypes from '../helpers/customPropTypes'
import getElementType from '../helpers/getElementType'
import getUnhandledProps from '../helpers/getUnhandledProps'

const StatusCell = props => {
  const ElementType = getElementType(StatusCell, props)
  const rest = getUnhandledProps(StatusCell, props)
  const { status } = props

  let icon
  switch (status) {
    case 'pending':
      icon = <Icon color="grey" name="clock" />
      break
    case 'running':
      icon = <Icon className="genomix" color="black" name="spinner" />
      break
    case 'complete':
      icon = <Icon color="green" name="checkmark" />
      break
    case 'cancelled':
      icon = <Icon color="red" name="dont" />
      break
    case 'failed':
      icon = <Icon color="red" name="x" />
      break
    default:
      icon = <Icon color="grey" name="question" />
      break
  }

  return <ElementType {...rest}>{icon}</ElementType>
}

StatusCell.propTypes = {
  as: customPropTypes.as,
  status: PropTypes.oneOf(['pending', 'running', 'complete', 'cancelled', 'failed', 'unknown']).isRequired,
  rowIndex: PropTypes.number,
}

StatusCell.defaultProps = {
  as: 'div',
}

StatusCell.handledProps = ['as', 'status', 'rowIndex']

export default StatusCell
