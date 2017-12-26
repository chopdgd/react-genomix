import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox } from 'semantic-ui-react'

import * as customPropTypes from 'LibSrc/helpers/customPropTypes'
import getElementType from 'LibSrc/helpers/getElementType'
import getUnhandledProps from 'LibSrc/helpers/getUnhandledProps'


class CheckboxCell extends React.PureComponent {
  onChange = (e) => {
    const { onChange, rowIndex } = this.props
    onChange(rowIndex)
  }

  render() {
    const ElementType = getElementType(CheckboxCell, this.props)
    const rest = getUnhandledProps(CheckboxCell, this.props)

    return (
      <ElementType {...rest}>
        <Checkbox onChange={this.onChange} />
      </ElementType>
    )
  }
}


CheckboxCell.propTypes = {
  as: customPropTypes.as,
  onChange: PropTypes.func.isRequired,
  rowIndex: PropTypes.number.isRequired,
}

CheckboxCell.defaultProps = {
  as: 'div'
}

CheckboxCell.handledProps = ['as', 'onChange', 'rowIndex']

export default CheckboxCell
