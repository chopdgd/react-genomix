import React from 'react';
import { Image } from 'semantic-ui-react';

const CHOPLogo = ({ ...props }) =>
<Image
  {...props}
  className="chopLogo"
  width="120px"
  src="https://s3.amazonaws.com/nexus.chop.edu/chop-logo.png" />;

export default CHOPLogo;
