import React from 'react'
import PropTypes from 'prop-types'
import { Label } from 'semantic-ui-react'

import { utils, Link } from 'LibIndex'
import * as customPropTypes from 'LibSrc/helpers/customPropTypes'
import getElementType from 'LibSrc/helpers/getElementType'
import getUnhandledProps from 'LibSrc/helpers/getUnhandledProps'


class GeneCell extends React.PureComponent {
  render() {
    const ElementType = getElementType(GeneCell, this.props)
    const rest = getUnhandledProps(GeneCell, this.props)
    const { gene } = this.props


    return (
      <ElementType {...rest}>
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
      </ElementType>
    )
  }
}


GeneCell.propTypes = {
  as: customPropTypes.as,
  gene: PropTypes.string.isRequired,
  rowIndex: PropTypes.number,
}

GeneCell.defaultProps = {
  as: 'div',
}

GeneCell.handledProps = ['as', 'gene', 'rowIndex']

export default GeneCell
