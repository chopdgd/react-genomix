import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import {  Welcome } from '@storybook/react/demo';
import MaleIcon from '../src/atoms/icons/MaleIcon';
// import FemaleIcon from '../atoms/icons/FemaleIcon';
// import InfoIcon from '../atoms/icons/InfoIcon';
// import WarningIcon from '../atoms/icons/WarningIcon';
// import QuestionIcon from '../atoms/icons/QuestionIcon';
// import AddIcon from '../atoms/icons/AddIcon';
// import SearchIcon from '../atoms/icons/SearchIcon';
// import CancelIcon from '../atoms/icons/CancelIcon';
// import UploadIcon from '../atoms/icons/UploadIcon';
// import DownloadIcon from '../atoms/icons/DownloadIcon';
// import ManualIcon from '../atoms/icons/ManualIcon';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('MaleIcon')} />);

storiesOf('MaleIcon', module)
  .add('change color', () => <MaleIcon color="red" />)
  .add('change size', () => <MaleIcon size="huge" />)
