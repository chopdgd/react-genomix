import React from 'react'
import PropTypes from 'prop-types'
import { Label } from 'semantic-ui-react'

import * as customPropTypes from '../../helpers/customPropTypes'
import getElementType from '../../helpers/getElementType'
import getUnhandledProps from '../../helpers/getUnhandledProps'
import getMolecularConsequenceColor from '../../utils/getMolecularConsequenceColor'


class MolecularConsequenceCell extends React.Component {
  render() {
    const ElementType = getElementType(MolecularConsequenceCell, this.props)
    const rest = getUnhandledProps(MolecularConsequenceCell, this.props)
    const { consequence, labelProps } = this.props
    const color = getMolecularConsequenceColor(consequence)

    return (
      <ElementType {...rest}>
        <Label {...labelProps} color={color} content={consequence} />
      </ElementType>
    )
  }
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

MolecularConsequenceCell.handledProps = ['labelProps']

export default MolecularConsequenceCell
