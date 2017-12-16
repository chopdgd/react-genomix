import React from 'react'
import PropTypes from 'prop-types'
import { Label } from 'semantic-ui-react'

import * as customPropTypes from '../../helpers/customPropTypes'
import getElementType from '../../helpers/getElementType'
import getUnhandledProps from '../../helpers/getUnhandledProps'
import getInterpretationColor from '../../utils/getInterpretationColor'


class InterpretationCell extends React.PureComponent {
  render() {
    const ElementType = getElementType(InterpretationCell, this.props)
    const rest = getUnhandledProps(InterpretationCell, this.props)
    const { classification, labelProps } = this.props
    const color = getInterpretationColor(classification)


    return (
      <ElementType {...rest}>
        <Label {...labelProps} color={color} content={classification} />
      </ElementType>
    )
  }
}


InterpretationCell.propTypes = {
  as: customPropTypes.as,
  classification: PropTypes.oneOf([
    'pathogenic',
    'likely pathogenic',
    'uncertain',
    'likely benign',
    'benign',
  ]),
  rowIndex: PropTypes.number,
  labelProps: PropTypes.object,
}

InterpretationCell.defaultProps = {
  as: 'div',
  labelProps: {
    basic: true,
  },
  classification: 'uncertain',
}

InterpretationCell.handledProps = ['labelProps']

export default InterpretationCell
