import React from 'react'
import { Divider, Grid } from 'semantic-ui-react'

import * as GenomiX from 'LibIndex'


const Buttons = () => (
  <Grid centered>
    <Grid.Column width={16} textAlign="center">

      <Grid.Row>
        <h1>Buttons</h1>
        <Divider />
        <GenomiX.Button content="Default" />
        <GenomiX.AcceptButton />
        <GenomiX.AddButton color="dark-blue" />
        <GenomiX.CancelButton />
        <GenomiX.DownloadButton color="action-info" />
        <GenomiX.SaveButton />
        <GenomiX.SearchButton color="action-warning" />
        <GenomiX.UploadButton color="light-blue" />
        <GenomiX.ExportButton />
      </Grid.Row>

      <Grid.Row>
        <h1>Inverted Buttons</h1>
        <Divider />
        <GenomiX.Button content="Default" inverted />
        <GenomiX.AcceptButton inverted />
        <GenomiX.AddButton color="dark-blue" inverted />
        <GenomiX.CancelButton inverted />
        <GenomiX.DownloadButton color="action-info" inverted />
        <GenomiX.SaveButton inverted />
        <GenomiX.SearchButton color="action-warning" inverted />
        <GenomiX.UploadButton color="light-blue" inverted />
        <GenomiX.ExportButton content={<GenomiX.Button content="Export" icon="download" inverted />} />
      </Grid.Row>

    </Grid.Column>
  </Grid>
)

export default Buttons
