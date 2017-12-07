import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';


class QuestionIcon extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Icon
        {...this.props}
        name="help"
      />
    );
  }
}

QuestionIcon.propTypes = {
  color: PropTypes.string,
};

QuestionIcon.defaultProps = {
  color: "black",
};

export default QuestionIcon;
