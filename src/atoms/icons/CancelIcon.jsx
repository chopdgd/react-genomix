import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';


class CancelIcon extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Icon
        {...this.props}
        name="ban"
      />
    );
  }
}

CancelIcon.propTypes = {
  color: PropTypes.string,
};

CancelIcon.defaultProps = {
  color: "red",
};

export default CancelIcon;
