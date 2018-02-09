import React from 'react'
import PropTypes from 'prop-types'
import { Cell } from 'fixed-data-table-2'
import { Checkbox } from 'semantic-ui-react'
import { get } from 'lodash'


class CheckboxFixedCell extends React.Component {
  constructor(props) {
    super(props)

    const { data, rowIndex, columnKey } = props
    const checked = get(data[rowIndex], columnKey)
    this.state = { checked }
  }

  onChange = (e) => {
    const { onChange, data, rowIndex, columnKey } = this.props
    const checked = get(data[rowIndex], columnKey)
    onChange(rowIndex)
    this.setState({ checked })
  }

  render() {
    const { onChange, data, rowIndex, columnKey, ...rest } = this.props
    const { checked } = this.state

    return (
      <Cell {...rest}>
        <Checkbox defaultChecked={checked} onChange={this.onChange} />
      </Cell>
    )
  }
}


CheckboxFixedCell.propTypes = {
  onChange: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object),
  rowIndex: PropTypes.number,
  columnKey: PropTypes.string,
}

CheckboxFixedCell.defaultProps = {
  data: [],
}


export default CheckboxFixedCell
