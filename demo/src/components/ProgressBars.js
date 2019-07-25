import React from 'react'
import { Card, Grid } from 'semantic-ui-react'
import { map } from 'lodash'
import moment from 'moment'
import * as GenomiX from '../../../src'

const data = [
  {
    header: 'Done - On Time',
    target: 20,
    start: '2018-01-01',
    signout: '2018-01-21',
  },
  {
    header: 'Done - Late',
    target: 20,
    start: '2018-01-01',
    signout: '2018-01-25',
  },
  {
    header: 'Done - Early',
    target: 20,
    start: '2018-01-01',
    signout: '2018-01-15',
  },
  {
    header: 'Ongoing - On track',
    target: 30,
    start: moment()
      .add(-25, 'd')
      .format('YYYY-MM-DD'),
    signout: null,
  },
  {
    header: 'Ongoing - Behind Schedule',
    target: 27,
    start: moment()
      .add(-25, 'd')
      .format('YYYY-MM-DD'),
    signout: null,
  },
  {
    header: 'Ongoing - Ahead of Schedule',
    target: 60,
    start: moment()
      .add(-25, 'd')
      .format('YYYY-MM-DD'),
    signout: null,
  },
]

const items = map(data, ({ header, target, start, signout }) => ({
  header: header,
  description: (
    <p>
      target: {target} <br />
      start: {start} <br />
      signout: {signout}
    </p>
  ),
  extra: <GenomiX.TurnAroundTimeProgress target={target} start={start} signout={signout} />,
}))

const ProgressBars = () => (
  <Grid padded centered>
    <Grid.Column width={16} textAlign="left">
      <Card.Group items={items} textAlign="center" itemsPerRow={3} stackable />
    </Grid.Column>
  </Grid>
)

export default ProgressBars
