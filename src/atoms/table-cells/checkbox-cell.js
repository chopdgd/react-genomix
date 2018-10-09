import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox } from 'semantic-ui-react'

import * as customPropTypes from '../../helpers/customPropTypes'
import getElementType from '../../helpers/getElementType'
import getUnhandledProps from '../../helpers/getUnhandledProps'


const CheckboxCell = props => {
  const ElementType = getElementType(CheckboxCell, props)
  const rest = getUnhandledProps(CheckboxCell, props)

  return (
    <ElementType key={props.rowIndex} {...rest}>
      <Checkbox
        name={props.name}
        value={props.rowIndex}
        checked={props.checked.includes(props.rowIndex)}
        onChange={props.onChange}
      />
    </ElementType>
  )
}


CheckboxCell.propTypes = {
  as: customPropTypes.as,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
}

CheckboxCell.defaultProps = {
  as: 'div',
  checked: [],
}

CheckboxCell.handledProps = [
  'as',
  'onChange',
  'rowIndex',
  'checked',
]


export default CheckboxCell
