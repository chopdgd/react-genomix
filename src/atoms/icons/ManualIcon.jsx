import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';


class ManualIcon extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Icon
        {...this.props}
        name="write"
      />
    );
  }
}

ManualIcon.propTypes = {
  color: PropTypes.string,
};

ManualIcon.defaultProps = {
  color: "black",
};

export default ManualIcon;
