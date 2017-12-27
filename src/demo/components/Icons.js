import React from 'react'
import { Card, Grid } from 'semantic-ui-react'

import * as GenomiX from 'LibIndex'


const items = [
  {
    header: 'Icon',
    description: <GenomiX.Icon name="github" color="action-info" size="large" />,
  },
  {
    header: 'AcceptIcon',
    description: <GenomiX.AcceptIcon size="large" />,
  },
  {
    header: 'CancelIcon',
    description: <GenomiX.CancelIcon size="large" />,
  },
  {
    header: 'AddIcon',
    description: <GenomiX.AddIcon size="large" />,
  },
  {
    header: 'DownloadIcon',
    description: <GenomiX.DownloadIcon color="dark-blue" size="large" />,
  },
  {
    header: 'ExternalIcon',
    description: <GenomiX.ExternalIcon size="large" />,
  },
  {
    header: 'FemaleIcon',
    description: <GenomiX.FemaleIcon size="large" />,
  },
  {
    header: 'InfoIcon',
    description: <GenomiX.InfoIcon color="light-grey" size="large" />,
  },
  {
    header: 'MaleIcon',
    description: <GenomiX.MaleIcon size="large" />,
  },
  {
    header: 'ManualIcon',
    description: <GenomiX.ManualIcon size="large" />,
  },
  {
    header: 'QuestionIcon',
    description: <GenomiX.QuestionIcon color="dark-grey" size="large" />,
  },
  {
    header: 'SaveIcon',
    description: <GenomiX.SaveIcon color="action-positive" size="large" />,
  },
  {
    header: 'SearchIcon',
    description: <GenomiX.SearchIcon color="green" size="large" />,
  },
  {
    header: 'UploadIcon',
    description: <GenomiX.UploadIcon size="large" />,
  },
  {
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
