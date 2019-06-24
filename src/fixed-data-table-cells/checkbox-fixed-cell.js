import React from 'react'
import PropTypes from 'prop-types'
import { Cell } from 'fixed-data-table-2'
import { Checkbox } from 'semantic-ui-react'
import { get } from 'lodash'

const CheckboxFixedCell = ({ data = [], rowIndex, columnKey, onChange, checked = [], ...rest }) => {
  const record = data[rowIndex]
  const value = get(record, columnKey)
  return (
    <Cell {...rest}>
      <Checkbox
        name={columnKey}
        value={value}
        checked={checked.includes(value)}
        onChange={(e, data) => onChange(e, { ...data, ...{ record } })}
      />
    </Cell>
  )
}

CheckboxFixedCell.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  rowIndex: PropTypes.number,
  columnKey: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
}

export default CheckboxFixedCell
