import React from 'react'
import PropTypes from 'prop-types'
import { Table, Dropdown } from 'semantic-ui-react'


class DropdownCell extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: ''
    }
  }

  onChange = (e, { name, value }) => {
    const { onChange, rowIndex } = this.props
    onChange({ column: name, row: rowIndex, value: value })
    this.setState({ value })
  }

  render() {
    const { as, name, rowIndex, onChange, options, dropDownProps, ...rest } = this.props
    const { value } = this.state

    if (as === 'td') {
      return (
        <Table.Cell {...rest}>
          <Dropdown
            name={name}
            value={value}
            onChange={this.onChange}
            options={options}
            {...dropDownProps}
          />
        </Table.Cell>
      )
    } else {
      return (
        <div>
          <Dropdown
            name={name}
            value={value}
            onChange={this.onChange}
            options={options}
            {...dropDownProps}
          />
        </div>
      )
    }
  }
}


DropdownCell.propTypes = {
  as: PropTypes.oneOf(['td', 'div']),
  name: PropTypes.string.isRequired,
  rowIndex: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  dropDownProps: PropTypes.object,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
      text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
      content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.element,
      ]),
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

export default DropdownCell
