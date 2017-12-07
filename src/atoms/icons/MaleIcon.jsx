import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';


class MaleIcon extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Icon
        {...this.props}
        name="male"
      />
    );
  }
}

MaleIcon.propTypes = {
  color: PropTypes.string,
};

MaleIcon.defaultProps = {
  color: "blue",
};

export default MaleIcon;
