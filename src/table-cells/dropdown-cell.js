import React from 'react'
import PropTypes from 'prop-types'
import { Dropdown } from 'semantic-ui-react'

import * as customPropTypes from '../helpers/customPropTypes'
import getElementType from '../helpers/getElementType'
import getUnhandledProps from '../helpers/getUnhandledProps'

const DropdownCell = props => {
  const ElementType = getElementType(DropdownCell, props)
  const rest = getUnhandledProps(DropdownCell, props)
  const { dropDownProps, name, onChange, options, rowIndex } = props
  return (
    <ElementType {...rest}>
      <Dropdown
        name={name}
        onChange={(e, { name, value }) => onChange({ column: name, row: rowIndex, value: value })}
        options={options}
        {...dropDownProps}
      />
    </ElementType>
  )
}

DropdownCell.propTypes = {
  as: customPropTypes.as,
  onChange: PropTypes.func.isRequired,
  rowIndex: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  dropDownProps: PropTypes.object,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      content: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element]),
    })
  ).isRequired,
}

DropdownCell.defaultProps = {
  as: 'div',
  dropDownProps: {
    fluid: false,
    multiple: false,
    selection: true,
    search: true,
  },
}

DropdownCell.handledProps = ['as', 'onChange', 'rowIndex', 'name', 'dropDownProps', 'options']

export default DropdownCell
