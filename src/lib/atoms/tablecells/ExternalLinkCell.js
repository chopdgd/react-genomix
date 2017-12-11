import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import { omit, get } from 'lodash';

const ExternalLinkCell = ({...props}) => {
  const cellProps = omit(props, ['content', 'url'])
  const content = get(props, 'content', 'missing data')
  const url = get(props, 'url', 'missing data')
  return (
    <Table.Cell
      {...cellProps}
      content={content}
      url={url}
    />
  );
}

ExternalLinkCell.propTypes = {
  content: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

ExternalLinkCell.defaultProps = {
};

export default ExternalLinkCell;
