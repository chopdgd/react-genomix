import React from 'react'
import PropTypes from 'prop-types'
import { List } from 'semantic-ui-react'
import { get, map } from 'lodash'

import { utils, BasicLabel, Link } from 'LibIndex'


const GeneLinksList = ({ genes, ...rest }) => (
  <List {...rest}>
    {map(genes, gene => {
      const symbol = get(gene, 'symbol')
      const ensembl = get(gene, 'ensemblId')

      return (
        <List.Item key={symbol}>
          <List.Content>
            {symbol}
            <Link
              href={utils.urlBuilders.omimSearch(symbol)}
              content={<BasicLabel color="green" content="OMIM" />}
            />

            <Link
              href={utils.urlBuilders.hgmdGene(symbol)}
              content={<BasicLabel color="blue" content="HGMD" />}
            />

            <Link
              href={utils.urlBuilders.geneReviewsEntry(symbol)}
              content={<BasicLabel color="blue" content="GeneReviews" />}
            />

            <Link
              href={utils.urlBuilders.gtexEntry(symbol)}
              content={<BasicLabel color="red" content="GTEx" />}
            />

            {ensembl && (
              <Link
                href={utils.urlBuilders.exacGeneEntry(ensembl)}
                content={<BasicLabel color="black" content="ExAC" />}
              />
            )}

            {ensembl && (
              <Link
                href={utils.urlBuilders.gnomadGeneEntry(ensembl)}
                content={<BasicLabel color="black" content="gnomAD" />}
              />
            )}

          </List.Content>
        </List.Item>
      )
    })}
  </List>
)


GeneLinksList.propTypes = {
  genes: PropTypes.arrayOf(PropTypes.shape({
    symbol: PropTypes.string,
    ensemblId: PropTypes.string,
  }))
}


export default GeneLinksList
