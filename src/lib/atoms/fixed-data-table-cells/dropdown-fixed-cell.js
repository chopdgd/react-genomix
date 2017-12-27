import React from 'react'
import PropTypes from 'prop-types'
import { Cell } from 'fixed-data-table-2'
import { Dropdown } from 'semantic-ui-react'
import { get } from 'lodash'


class DropdownFixedCell extends React.PureComponent {
  constructor(props) {
    super(props)

    const { data, rowIndex, columnKey } = props
    const value = get(data[rowIndex], columnKey)
    this.state = { value }
  }

  onChange = (e) => {
    const { onChange, data, rowIndex, columnKey } = this.props
    const value = get(data[rowIndex], columnKey)
    onChange({ column: columnKey, row: rowIndex, value: value })
    this.setState({ value })
  }

  render() {
    const { onChange, options, data, rowIndex, columnKey, ...rest } = this.props
    const { value } = this.state

    return (
      <Cell {...rest}>
        <Dropdown
          name={columnKey}
          value={value}
          onChange={this.onChange}
          options={options}
          selection
          search
        />
      </Cell>
    )
  }
}


DropdownFixedCell.propTypes = {
  onChange: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object),
  rowIndex: PropTypes.number,
  columnKey: PropTypes.string,
}

DropdownFixedCell.defaultProps = {
  data: [],
}

export default DropdownFixedCell
