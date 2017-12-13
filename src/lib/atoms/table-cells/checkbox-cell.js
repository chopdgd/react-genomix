import React from 'react'
import PropTypes from 'prop-types'
import { Table, Checkbox } from 'semantic-ui-react'


class CheckboxCell extends React.PureComponent {
  onChange = (e) => {
    const { onChange, rowIndex } = this.props
    onChange(rowIndex)
  }

  render() {
    const { as, onChange, rowIndex, ...rest } = this.props

    if (as === 'td') {
      return <Table.Cell {...rest}><Checkbox onChange={this.onChange} /></Table.Cell>
    } else {
      return <div><Checkbox onChange={this.onChange} /></div>
    }
  }
}


CheckboxCell.propTypes = {
  as: PropTypes.oneOf(['td', 'div']),
  onChange: PropTypes.func.isRequired,
  rowIndex: PropTypes.number.isRequired,
}

CheckboxCell.defaultProps = {
  as: 'div'
}

export default CheckboxCell
