import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';


class WarningIcon extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Icon
        {...this.props}
        name="warning sign"
      />
    );
  }
}

WarningIcon.propTypes = {
  color: PropTypes.string,
};

WarningIcon.defaultProps = {
  color: "yellow",
};

export default WarningIcon;
