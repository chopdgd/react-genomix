import React from 'react'
import { Grid } from 'semantic-ui-react'

import {
  AcceptButton,
  CancelButton,
  DownloadButton,
  FilterButton,
  SearchButton,
} from 'LibIndex'


const Buttons = () => (
  <Grid centered>
    <Grid.Column width={16} textAlign="center">
      <h1>Buttons</h1>

      <AcceptButton />
      <CancelButton />
      <DownloadButton />
      <FilterButton />
      <SearchButton />

    </Grid.Column>
  </Grid>
)

export default Buttons
