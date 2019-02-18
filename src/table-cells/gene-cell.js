import React from 'react'
import PropTypes from 'prop-types'
import { get, map } from 'lodash'

import { GeneResourcesPopup } from '../index'
import * as customPropTypes from '../helpers/customPropTypes'
import getElementType from '../helpers/getElementType'
import getUnhandledProps from '../helpers/getUnhandledProps'

const GeneCell = props => {
  const ElementType = getElementType(GeneCell, props)
  const rest = getUnhandledProps(GeneCell, props)
  const { genes } = props

  let content = `${genes.length} genes`
  if (genes.length <= 3) content = map(genes, gene => get(gene, 'symbol')).join()

  return (
    <ElementType {...rest}>
      <GeneResourcesPopup trigger={<p>{content}</p>} genes={genes} hoverable wide="very" position="bottom left" />
    </ElementType>
  )
}

GeneCell.propTypes = {
  as: customPropTypes.as,
  genes: PropTypes.arrayOf(
    PropTypes.shape({
      symbol: PropTypes.string,
      ensemblId: PropTypes.string,
    })
  ),
  rowIndex: PropTypes.number,
}

GeneCell.defaultProps = {
  as: 'div',
  genes: [],
}

GeneCell.handledProps = ['as', 'genes', 'rowIndex']

export default GeneCell
