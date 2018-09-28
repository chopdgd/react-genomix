import React from 'react'
import { Card, Grid } from 'semantic-ui-react'

import * as GenomiX from 'lib'


const items = [
  {
    key: 1,
    header: 'Button',
    description: <GenomiX.Button content="Default" />,
  },
  {
    key: 2,
    header: 'AddButton',
    description: <GenomiX.AddButton color="dark-blue" />,
  },
  {
    key: 3,
    header: 'AcceptButton',
    description: <GenomiX.AcceptButton />,
  },
  {
    key: 4,
    header: 'CancelButton',
    description: <GenomiX.CancelButton />,
  },
  {
    key: 5,
    header: 'DownloadButton',
    description: <GenomiX.DownloadButton color="action-info" />,
  },
  {
    key: 6,
    header: 'SaveButton',
    description: <GenomiX.SaveButton />,
  },
  {
    key: 7,
    header: 'SearchButton',
    description: <GenomiX.SearchButton color="action-warning" />,
  },
  {
    key: 9,
    header: 'ExportButton',
    description: <GenomiX.ExportButton content={<GenomiX.Button content="Export" icon="download" />} />,
  },

  {
    key: 10,
    header: 'Button',
    description: <GenomiX.Button content="Default" inverted />,
    meta: 'inverted',
  },
  {
    key: 11,
    header: 'AddButton',
    description: <GenomiX.AddButton color="dark-blue" inverted />,
    meta: 'inverted',
  },
  {
    key: 12,
    header: 'AcceptButton',
    description: <GenomiX.AcceptButton inverted />,
    meta: 'inverted',
  },
  {
    key: 13,
    header: 'CancelButton',
    description: <GenomiX.CancelButton inverted />,
    meta: 'inverted',
  },
  {
    key: 14,
    header: 'DownloadButton',
    description: <GenomiX.DownloadButton color="action-info" inverted />,
    meta: 'inverted',
  },
  {
    key: 15,
    header: 'SaveButton',
    description: <GenomiX.SaveButton inverted />,
    meta: 'inverted',
  },
  {
    key: 16,
    header: 'SearchButton',
    description: <GenomiX.SearchButton color="action-warning" inverted />,
    meta: 'inverted',
  },
  {
    key: 18,
    header: 'ExportButton',
    description: (
      <GenomiX.ExportButton
        content={<GenomiX.Button content="Export" icon="download" inverted />}
        data={[{ hi: 'Mike' }]}
        onExport={(data) => data}
      />
    ),
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
