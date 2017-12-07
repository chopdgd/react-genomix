import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';


class SearchIcon extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Icon
        {...this.props}
        name="search"
      />
    );
  }
}

SearchIcon.propTypes = {
  color: PropTypes.string,
};

SearchIcon.defaultProps = {
  color: "black",
};

export default SearchIcon;
