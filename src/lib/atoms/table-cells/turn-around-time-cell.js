import React from 'react'
import PropTypes from 'prop-types'

import { TurnAroundTimeProgress } from 'LibIndex'
import * as customPropTypes from '../../helpers/customPropTypes'
import getElementType from '../../helpers/getElementType'
import getUnhandledProps from '../../helpers/getUnhandledProps'


class TurnAroundTimeProgressCell extends React.PureComponent {
  render() {
    const ElementType = getElementType(TurnAroundTimeProgressCell, this.props)
    const rest = getUnhandledProps(TurnAroundTimeProgressCell, this.props)
    const { target, start, signout, progressProps } = this.props

    return (
      <ElementType {...rest}>
        <TurnAroundTimeProgress
          target={target}
          start={start}
          signout={signout}
          {...progressProps}
        />
      </ElementType>
    )
  }
}


TurnAroundTimeProgressCell.propTypes = {
  as: customPropTypes.as,
  target: PropTypes.number.isRequired,
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

TurnAroundTimeProgressCell.handledProps = ['progressProps']

export default TurnAroundTimeProgressCell
