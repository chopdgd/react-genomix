import React from 'react'
import { Grid } from 'semantic-ui-react'

import {
  Button,
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
      <Button content="Default" />
      <DownloadButton color="secondary" inverted />
      <FilterButton color="primary" />
      <SearchButton color="pink" inverted />
      <SearchButton color="light-grey" />

    </Grid.Column>
  </Grid>
)

export default Buttons
