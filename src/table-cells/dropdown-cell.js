import React from 'react'
import PropTypes from 'prop-types'
import { Dropdown } from 'semantic-ui-react'

import * as customPropTypes from '../helpers/customPropTypes'
import getElementType from '../helpers/getElementType'
import getUnhandledProps from '../helpers/getUnhandledProps'

class DropdownCell extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: '',
    }
  }

  onChange = (e, { name, value }) => {
    const { onChange, rowIndex } = this.props
    onChange({ column: name, row: rowIndex, value: value })
    this.setState({ value })
  }

  render() {
    const ElementType = getElementType(DropdownCell, this.props)
    const rest = getUnhandledProps(DropdownCell, this.props)
    const { value } = this.state
    const { name, options, dropDownProps } = this.props

    return (
      <ElementType {...rest}>
        <Dropdown name={name} value={value} onChange={this.onChange} options={options} {...dropDownProps} />
      </ElementType>
    )
  }
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
