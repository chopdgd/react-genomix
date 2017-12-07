import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';


class FemaleIcon extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Icon
        {...this.props}
        name="female"
      />
    );
  }
}

FemaleIcon.propTypes = {
  color: PropTypes.string,
};

FemaleIcon.defaultProps = {
  color: "pink",
};

export default FemaleIcon;
