import React from 'react'
import { Label, List, Popup } from 'semantic-ui-react'
import { get, join, map } from 'lodash'

import { ExternalLink, utils } from '../../src/index'

export const GeneCell = ({ cellData, column }) => {
  const props = get(column, 'props')
  let value = []
  if (typeof cellData === 'string') value = [cellData]
  else if (cellData instanceof Array) value = cellData

  let trigger
  if (value.length > 3) trigger = `${value.length} genes`
  else trigger = join(value, ', ')

  return (
    <Popup trigger={<p style={{ cursor: 'pointer' }}>{trigger}</p>} on="click" wide="very" {...props}>
      <Popup.Content>
        <List>
          {map(value, gene => (
            <List.Item key={gene}>
              <List.Content>
                {gene}&nbsp;&nbsp;
                <ExternalLink href={utils.urlBuilders.omimSearch(gene)} style={{ paddingRight: 5 }}>
                  <Label content="OMIM" color="green" />
                </ExternalLink>
                <ExternalLink href={utils.urlBuilders.hgmdGene(gene)} style={{ paddingRight: 5 }}>
                  <Label content="HGMD" color="blue" />
                </ExternalLink>
                <ExternalLink href={utils.urlBuilders.geneReviewsEntry(gene)} style={{ paddingRight: 5 }}>
                  <Label content="GeneReviews" color="blue" />
                </ExternalLink>
                <ExternalLink href={utils.urlBuilders.gtexEntry(gene)} style={{ paddingRight: 5 }}>
                  <Label content="GTEx" color="red" />
                </ExternalLink>
                <ExternalLink href={utils.urlBuilders.gnomadGeneEntry(gene)}>
                  <Label content="gnomAD" color="black" />
                </ExternalLink>
              </List.Content>
            </List.Item>
          ))}
        </List>
      </Popup.Content>
    </Popup>
  )
}

export default GeneCell
