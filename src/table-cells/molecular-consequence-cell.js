import React from 'react'
import PropTypes from 'prop-types'
import { Label } from 'semantic-ui-react'

import { utils } from '../index'
import * as customPropTypes from '../helpers/customPropTypes'
import getElementType from '../helpers/getElementType'
import getUnhandledProps from '../helpers/getUnhandledProps'


const MolecularConsequenceCell = props => {
  const ElementType = getElementType(MolecularConsequenceCell, props)
  const rest = getUnhandledProps(MolecularConsequenceCell, props)
  const { consequence, labelProps } = props
  const color = utils.getMolecularConsequenceColor(consequence)

  return (
    <ElementType {...rest}>
      <Label {...labelProps} color={color} content={consequence} />
    </ElementType>
  )
}


MolecularConsequenceCell.propTypes = {
  as: customPropTypes.as,
  consequence: PropTypes.string.isRequired,
  rowIndex: PropTypes.number,
  labelProps: PropTypes.object,
}

MolecularConsequenceCell.defaultProps = {
  as: 'div',
  labelProps: {
    basic: true,
  },
}

MolecularConsequenceCell.handledProps = [
  'as',
  'consequence',
  'rowIndex',
  'labelProps',
]


export default MolecularConsequenceCell
