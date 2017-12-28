import React from 'react'
import { Card, Grid } from 'semantic-ui-react'

import * as GenomiX from 'LibIndex'


const items = [
  {
    key: 1,
    header: 'Icon',
    description: <GenomiX.Icon name="github" color="action-info" size="large" />,
  },
  {
    key: 2,
    header: 'AcceptIcon',
    description: <GenomiX.AcceptIcon size="large" />,
  },
  {
    key: 3,
    header: 'CancelIcon',
    description: <GenomiX.CancelIcon size="large" />,
  },
  {
    key: 4,
    header: 'AddIcon',
    description: <GenomiX.AddIcon size="large" />,
  },
  {
    key: 5,
    header: 'DownloadIcon',
    description: <GenomiX.DownloadIcon color="dark-blue" size="large" />,
  },
  {
    key: 6,
    header: 'ExternalIcon',
    description: <GenomiX.ExternalIcon size="large" />,
  },
  {
    key: 7,
    header: 'FemaleIcon',
    description: <GenomiX.FemaleIcon size="large" />,
  },
  {
    key: 8,
    header: 'InfoIcon',
    description: <GenomiX.InfoIcon color="light-grey" size="large" />,
  },
  {
    key: 9,
    header: 'MaleIcon',
    description: <GenomiX.MaleIcon size="large" />,
  },
  {
    key: 10,
    header: 'ManualIcon',
    description: <GenomiX.ManualIcon size="large" />,
  },
  {
    key: 11,
    header: 'QuestionIcon',
    description: <GenomiX.QuestionIcon color="dark-grey" size="large" />,
  },
  {
    key: 12,
    header: 'SaveIcon',
    description: <GenomiX.SaveIcon color="action-positive" size="large" />,
  },
  {
    key: 13,
    header: 'SearchIcon',
    description: <GenomiX.SearchIcon color="green" size="large" />,
  },
  {
    key: 14,
    header: 'UploadIcon',
    description: <GenomiX.UploadIcon size="large" />,
  },
  {
    key: 15,
    header: 'WarningIcon',
    description: <GenomiX.WarningIcon size="large" />,
  },
]


const Icons = () => (
  <Grid padded centered>
    <Grid.Column width={16} textAlign="center">
      <Card.Group
        items={items}
        textAlign="center"
        itemsPerRow={5}
        stackable
      />
    </Grid.Column>
  </Grid>
)

export default Icons
