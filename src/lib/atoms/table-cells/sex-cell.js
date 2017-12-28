import React from 'react'
import PropTypes from 'prop-types'
import { toLower, toString } from 'lodash'

import { MaleIcon, FemaleIcon, QuestionIcon } from 'LibIndex'
import * as customPropTypes from 'LibSrc/helpers/customPropTypes'
import getElementType from 'LibSrc/helpers/getElementType'
import getUnhandledProps from 'LibSrc/helpers/getUnhandledProps'


class SexCell extends React.PureComponent {
  render() {
    const ElementType = getElementType(SexCell, this.props)
    const rest = getUnhandledProps(SexCell, this.props)
    const { sex, iconProps } = this.props

    // PED file nomenclature for sex. Anything else is unknown
    // See: https://gatkforums.broadinstitute.org/gatk/discussion/7696/pedigree-ped-files
    const normalizedSex = toLower(toString(sex))

    let icon = <QuestionIcon {...iconProps} />
    if (['m', 'male', '1'].includes(normalizedSex)) {
      icon = <MaleIcon {...iconProps} />
    } else if (['f', 'female', '2'].includes(normalizedSex)) {
      icon = <FemaleIcon {...iconProps} />
    }

    return (
      <ElementType {...rest}>
        {icon}
      </ElementType>
    )
  }
}


SexCell.propTypes = {
  as: customPropTypes.as,
  sex: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  rowIndex: PropTypes.number,
  iconProps: PropTypes.object,
}

SexCell.defaultProps = {
  as: 'div',
  sex: 'unknown',
  iconProps: {},
}

SexCell.handledProps = [
  'as',
  'sex',
  'rowIndex',
  'iconProps',
]

export default SexCell
