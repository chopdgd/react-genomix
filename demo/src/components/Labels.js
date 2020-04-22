import React from 'react'
import { Card, Grid, Label } from 'semantic-ui-react'
import { map } from 'lodash'
import { getColor } from '../../../src/utils/getColor'

const data = [
  'default',
  'yes',
  'no',
  'likely pathogenic',
  'pathogenic',
  'vous',
  'likely benign',
  'benign',
  'tier 1 - a',
  'tier 1 - b',
  'tier 2',
  'tier 3',
  'tier 4 - a',
  'diagnostic',
  'likely diagnostic',
  'inconclusive',
  'negative',
  'associated',
  'not associated',
  'secondary finding',
  'candidate',
  'uncertain',
  'previously reported',
  'not applicable',
  'frameshift',
  'stop_codon',
  'start_codon',
  'missense',
  'splice_acceptor',
  'insert',
  'deletion',
  'stat',
  'urgent',
  'routine',
  'definitive',
  'moderate',
  'limited',
]

const items = map(data, label => ({
  description: <Label content={label} color={getColor(label)} />,
}))

const Labels = () => (
  <Grid padded centered>
    <Grid.Column width={16} textAlign="left">
      <Card.Group items={items} textAlign="center" itemsPerRow={8} stackable />
    </Grid.Column>
  </Grid>
)

export default Labels
