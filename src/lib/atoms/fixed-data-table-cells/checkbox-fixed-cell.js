import React from 'react'
import PropTypes from 'prop-types'
import { Cell } from 'fixed-data-table-2'
import { Checkbox } from 'semantic-ui-react'


class CheckboxFixedCell extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      defaultChecked: props.defaultChecked,
      checked: props.defaultChecked,
    }
  }

  onChange = (e) => {
    const { onChange, rowIndex } = this.props
    const { checked } = this.state

    onChange(rowIndex)
    this.setState({
      checked: !checked
    })
  }

  render() {
    const { onChange, data, rowIndex, columnKey, defaultChecked, ...rest } = this.props

    return (
      <Cell {...rest}>
        <Checkbox defaultChecked={defaultChecked} onChange={this.onChange} />
      </Cell>
    )
  }
}


CheckboxFixedCell.propTypes = {
  onChange: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object),
  rowIndex: PropTypes.number,
  columnKey: PropTypes.string,
  defaultChecked: PropTypes.bool,
}

CheckboxFixedCell.defaultProps = {
  data: [],
  defaultChecked: false,
}

export default CheckboxFixedCell
