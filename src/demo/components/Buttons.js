import React from 'react'
import { Card, Grid } from 'semantic-ui-react'

import * as GenomiX from 'LibIndex'

const handleResults = (results) => {
  alert(JSON.stringify(results))
}

const items = [
  {
    header: 'Button',
    description: <GenomiX.Button content="Default" />,
  },
  {
    header: 'AddButton',
    description: <GenomiX.AddButton color="dark-blue" />,
  },
  {
    header: 'AcceptButton',
    description: <GenomiX.AcceptButton />,
  },
  {
    header: 'CancelButton',
    description: <GenomiX.CancelButton />,
  },
  {
    header: 'DownloadButton',
    description: <GenomiX.DownloadButton color="action-info" />,
  },
  {
    header: 'SaveButton',
    description: <GenomiX.SaveButton />,
  },
  {
    header: 'SearchButton',
    description: <GenomiX.SearchButton color="action-warning" />,
  },
  {
    header: 'UploadButton',
    description: <GenomiX.UploadButton color="light-blue" />,
  },
  {
    header: 'ExportButton',
    description: <GenomiX.ExportButton />,
  },

  {
    header: 'Button',
    description: <GenomiX.Button content="Default" inverted />,
    meta: 'inverted',
  },
  {
    header: 'AddButton',
    description: <GenomiX.AddButton color="dark-blue" inverted />,
    meta: 'inverted',
  },
  {
    header: 'AcceptButton',
    description: <GenomiX.AcceptButton inverted />,
    meta: 'inverted',
  },
  {
    header: 'CancelButton',
    description: <GenomiX.CancelButton inverted />,
    meta: 'inverted',
  },
  {
    header: 'DownloadButton',
    description: <GenomiX.DownloadButton color="action-info" inverted />,
    meta: 'inverted',
  },
  {
    header: 'SaveButton',
    description: <GenomiX.SaveButton inverted />,
    meta: 'inverted',
  },
  {
    header: 'SearchButton',
    description: <GenomiX.SearchButton color="action-warning" inverted />,
    meta: 'inverted',
  },
  {
    header: 'UploadButton',
    description: <GenomiX.UploadButton color="light-blue" inverted />,
    meta: 'inverted',
  },
  {
    header: 'ExportButton',
    description: <GenomiX.ExportButton content={<GenomiX.Button content="Export" icon="download" inverted />} />,
    meta: 'inverted',
  },
]

const Buttons = () => (
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

export default Buttons
