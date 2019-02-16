import React from 'react'
import PropTypes from 'prop-types'
import { Popup } from 'semantic-ui-react'

import { GeneLinksList } from '../index'


const GeneResourcesPopup = ({ trigger, genes, ...rest }) => (
  <Popup
    trigger={trigger}
    content={<GeneLinksList genes={genes} />}
    {...rest}
  />
)


GeneResourcesPopup.propTypes = {
  trigger: PropTypes.any.isRequired,
  genes: PropTypes.arrayOf(PropTypes.shape({
    symbol: PropTypes.string,
    ensemblId: PropTypes.string,
  })),
}


export default GeneResourcesPopup
