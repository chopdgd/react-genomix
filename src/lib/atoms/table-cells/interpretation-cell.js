import React from 'react'
import PropTypes from 'prop-types'
import { Label } from 'semantic-ui-react'

import { utils } from 'LibIndex'
import * as customPropTypes from 'LibSrc/helpers/customPropTypes'
import getElementType from 'LibSrc/helpers/getElementType'
import getUnhandledProps from 'LibSrc/helpers/getUnhandledProps'


class InterpretationCell extends React.PureComponent {
  render() {
    const ElementType = getElementType(InterpretationCell, this.props)
    const rest = getUnhandledProps(InterpretationCell, this.props)
    const { classification, labelProps } = this.props
    const color = utils.getInterpretationColor(classification)


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