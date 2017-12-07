import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';


class UploadIcon extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Icon
        {...this.props}
        name="upload"
      />
    );
  }
}

UploadIcon.propTypes = {
  color: PropTypes.string,
};

UploadIcon.defaultProps = {
  color: "black",
};

export default UploadIcon;
