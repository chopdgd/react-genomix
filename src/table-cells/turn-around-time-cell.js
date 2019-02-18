import React from 'react'
import PropTypes from 'prop-types'

import { TurnAroundTimeProgress } from '../index'
import * as customPropTypes from '../helpers/customPropTypes'
import getElementType from '../helpers/getElementType'
import getUnhandledProps from '../helpers/getUnhandledProps'


const TurnAroundTimeProgressCell = props => {
  const ElementType = getElementType(TurnAroundTimeProgressCell, props)
  const rest = getUnhandledProps(TurnAroundTimeProgressCell, props)
  const { target, start, signout, compact, progressProps } = props

  return (
    <ElementType {...rest}>
      <TurnAroundTimeProgress
        target={target}
        start={start}
        signout={signout}
        compact={compact}
        {...progressProps}
      />
    </ElementType>
  )
}


TurnAroundTimeProgressCell.propTypes = {
  as: customPropTypes.as,
  target: PropTypes.number,
  start: PropTypes.string,
  signout: PropTypes.string,
  rowIndex: PropTypes.number,
  progressProps: PropTypes.object,
}

TurnAroundTimeProgressCell.defaultProps = {
  as: 'div',
  progressProps: {
    size: 'tiny',
  },
}

TurnAroundTimeProgressCell.handledProps = [
  'as',
  'target',
  'start',
  'signout',
  'rowIndex',
  'progressProps',
]


export default TurnAroundTimeProgressCell
