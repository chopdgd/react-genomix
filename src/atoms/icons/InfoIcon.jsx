import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';


class InfoIcon extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Icon
        {...this.props}
        name="info circle"
      />
    );
  }
}

InfoIcon.propTypes = {
  color: PropTypes.string,
};

InfoIcon.defaultProps = {
  color: "blue",
};

export default InfoIcon;
