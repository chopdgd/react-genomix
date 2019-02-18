import React from 'react'
import PropTypes from 'prop-types'
import { Cell } from 'fixed-data-table-2'
import { get, map } from 'lodash'

import { GeneResourcesPopup } from '../index'

const GeneFixedCell = props => {
  const { data, rowIndex, columnKey, ...rest } = props
  const genes = get(data[rowIndex], columnKey)

  let content = `${genes.length} genes`
  if (genes.length <= 3) content = map(genes, gene => get(gene, 'symbol')).join()

  return (
    <Cell {...rest}>
      <GeneResourcesPopup trigger={<p>{content}</p>} hoverable wide="very" position="bottom left" genes={genes} />
    </Cell>
  )
}

GeneFixedCell.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  rowIndex: PropTypes.number,
  columnKey: PropTypes.string,
}

GeneFixedCell.defaultProps = {
  data: [],
}

export default GeneFixedCell
