import React from 'react'
import { Grid } from 'semantic-ui-react'

import * as GenomiX from 'LibIndex'


const Buttons = () => (
  <Grid centered>
    <Grid.Column width={16} textAlign="center">

      <h1>Icons</h1>
      <GenomiX.Icon color="action-info" />
      <GenomiX.AcceptIcon />
      <GenomiX.AddIcon color="action-warning" />
      <GenomiX.CancelIcon />
      <GenomiX.DownloadIcon color="dark-blue" />
      <GenomiX.FemaleIcon />
      <GenomiX.InfoIcon color="light-grey" />
      <GenomiX.MaleIcon />
      <GenomiX.ManualIcon />
      <GenomiX.QuestionIcon color="dark-grey" />
      <GenomiX.SearchIcon color="green" />
      <GenomiX.UploadIcon />
      <GenomiX.WarningIcon />

    </Grid.Column>
  </Grid>
)

export default Buttons
