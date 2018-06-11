import React from 'react'
import PropTypes from 'prop-types'
import { Cell } from 'fixed-data-table-2'
import { Checkbox } from 'semantic-ui-react'
import { get } from 'lodash'


const CheckboxFixedCell = props => {
  const { data, rowIndex, columnKey, onChange, checked, ...rest } = props
  const record = get(data[rowIndex], columnKey)

  return (
    <Cell {...rest}>
      <Checkbox
        name={columnKey}
        value={record}
        checked={checked.includes(record)}
        onChange={onChange}
      />
    </Cell>
  )
}


CheckboxFixedCell.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  rowIndex: PropTypes.number,
  columnKey: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
}

CheckboxFixedCell.defaultProps = {
  data: [],
  checked: [],
}


export default CheckboxFixedCell
