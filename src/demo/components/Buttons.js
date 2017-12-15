import React from 'react'
import { Divider, Grid, Button } from 'semantic-ui-react'

import * as GenomiX from 'LibIndex'

const handleResults = (results) => {
  alert(JSON.stringify(results))
}

const Buttons = () => (
  <Grid centered>
    <Grid.Column width={16} textAlign="center">

      <Grid.Row>
        <h1>Buttons</h1>
        <Divider />
        <Button.Group>
          <GenomiX.Button content="Default" />
          <GenomiX.AcceptButton />
          <GenomiX.AddButton color="dark-blue" />
          <GenomiX.CancelButton />
          <GenomiX.DownloadButton color="action-info" />
          <GenomiX.SaveButton />
          <GenomiX.SearchButton color="action-warning" />
          <GenomiX.ExportButton />
          <GenomiX.UploadButton handleResults={handleResults}/>
        </Button.Group>
      </Grid.Row>

      <Grid.Row>
        <h1>Inverted Buttons</h1>
        <Divider />
        <Button.Group>
          <GenomiX.Button content="Default" inverted />
          <GenomiX.AcceptButton inverted />
          <GenomiX.AddButton color="dark-blue" inverted />
          <GenomiX.CancelButton inverted />
          <GenomiX.DownloadButton color="action-info" inverted />
          <GenomiX.SaveButton inverted />
          <GenomiX.SearchButton color="action-warning" inverted />
          <GenomiX.ExportButton content={<GenomiX.Button content="Export" icon="download" inverted />} />
          <GenomiX.UploadButton content={<GenomiX.Button content="Upload" icon="upload" color="light-blue" inverted />} handleResults={handleResults} />
        </Button.Group>
      </Grid.Row>

    </Grid.Column>
  </Grid>
)

export default Buttons
