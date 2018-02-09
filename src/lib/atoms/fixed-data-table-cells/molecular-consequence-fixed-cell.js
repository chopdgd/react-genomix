import React from 'react'
import PropTypes from 'prop-types'
import { Cell } from 'fixed-data-table-2'
import { Label } from 'semantic-ui-react'
import { get } from 'lodash'

import { utils } from 'LibIndex'


const MolecularConsequenceFixedCell = props => {
  const { labelProps, data, rowIndex, columnKey, ...rest } = props
  const consequence = get(data[rowIndex], columnKey)
  const color = utils.getMolecularConsequenceColor(consequence)

  return (
    <Cell {...rest}>
      <Label {...labelProps} color={color} content={consequence} />
    </Cell>
  )
}


MolecularConsequenceFixedCell.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  rowIndex: PropTypes.number,
  columnKey: PropTypes.string,
  labelProps: PropTypes.object,
}

MolecularConsequenceFixedCell.defaultProps = {
  data: [],
  labelProps: {
    basic: true,
  },
}


export default MolecularConsequenceFixedCell
