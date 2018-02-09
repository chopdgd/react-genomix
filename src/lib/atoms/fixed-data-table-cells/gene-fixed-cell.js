import React from 'react'
import PropTypes from 'prop-types'
import { Cell } from 'fixed-data-table-2'
import { Label } from 'semantic-ui-react'
import { get } from 'lodash'

import { utils, Link } from 'LibIndex'


const GeneFixedCell = props => {
  const { data, rowIndex, columnKey, ...rest } = props
  const gene = get(data[rowIndex], columnKey)

  return (
    <Cell {...rest}>
      {gene} &nbsp;&nbsp;
      <Link
        content={<Label basic size="tiny" content="H" color="blue" />}
        href={utils.urlBuilders.hgmdGene(gene)}
      />
      <Link
        content={<Label basic size="tiny" content="O" color="green" />}
        href={utils.urlBuilders.omimSearch(gene)}
      />
      <Link
        content={<Label basic size="tiny" content="P" color="blue" />}
        href={utils.urlBuilders.pubmedSearch(gene)}
      />
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
