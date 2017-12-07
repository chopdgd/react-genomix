import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';


class DownloadIcon extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Icon
        {...this.props}
        name="download"
      />
    );
  }
}

DownloadIcon.propTypes = {
  color: PropTypes.string,
};

DownloadIcon.defaultProps = {
  color: "black",
};

export default DownloadIcon;
