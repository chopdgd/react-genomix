import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import { omit, get } from 'lodash';

const TextCell = ({...props}) => {
  const cellProps = omit(props, ['content'])
  const content = get(props, 'content', 'missing data')
  return (
    <Table.Cell
      {...cellProps}
      content={content}
    />
  );
}

TextCell.propTypes = {
  content: PropTypes.string.isRequired,
};

TextCell.defaultProps = {
};

export default TextCell;
