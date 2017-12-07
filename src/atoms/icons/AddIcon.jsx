import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';


class AddIcon extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Icon
        {...this.props}
        name="plus"
      />
    );
  }
}

AddIcon.propTypes = {
  color: PropTypes.string,
};

AddIcon.defaultProps = {
  color: "black",
};

export default AddIcon;
