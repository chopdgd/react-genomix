import React from 'react'
import PropTypes from 'prop-types'
import { Label } from 'semantic-ui-react'

import { utils } from '../../index'
import * as customPropTypes from '../../helpers/customPropTypes'
import getElementType from '../../helpers/getElementType'
import getUnhandledProps from '../../helpers/getUnhandledProps'


const InterpretationCell = props => {
  const ElementType = getElementType(InterpretationCell, props)
  const rest = getUnhandledProps(InterpretationCell, props)
  const { classification, labelProps } = props
  const color = utils.getInterpretationColor(classification)


  return (
    <ElementType {...rest}>
      <Label {...labelProps} color={color} content={classification} />
    </ElementType>
  )
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

InterpretationCell.handledProps = [
  'as',
  'classification',
  'rowIndex',
  'labelProps',
]


export default InterpretationCell
