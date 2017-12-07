import React from 'react';
import { Grid } from 'semantic-ui-react';
import Example from '../lib';
import { SecondExample } from '../lib';
import MaleIcon from '../atoms/icons/MaleIcon';
import FemaleIcon from '../atoms/icons/FemaleIcon';
import InfoIcon from '../atoms/icons/InfoIcon';
import WarningIcon from '../atoms/icons/WarningIcon';
import QuestionIcon from '../atoms/icons/QuestionIcon';
import AddIcon from '../atoms/icons/AddIcon';
import SearchIcon from '../atoms/icons/SearchIcon';
import CancelIcon from '../atoms/icons/CancelIcon';
import UploadIcon from '../atoms/icons/UploadIcon';
import DownloadIcon from '../atoms/icons/DownloadIcon';
import ManualIcon from '../atoms/icons/ManualIcon';

const App = () => (
  <div>
    <Grid centered>
      <Grid.Row>
      <Example />
      <SecondExample />
      </Grid.Row>
      <Grid.Row>
        <MaleIcon />
        <FemaleIcon />
        <InfoIcon />
        <WarningIcon />
        <QuestionIcon />
        <AddIcon />
        <SearchIcon />
        <CancelIcon />
        <UploadIcon />
        <DownloadIcon />
        <ManualIcon />
      </Grid.Row>
    </Grid>
  </div>
);

export default App;
