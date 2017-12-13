import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import { omit, get } from 'lodash';

import * as GenomiX from 'LibIndex'

const ExternalLinkCell = ({...props}) => {
  const cellProps = omit(props, ['content', 'url'])
  const content = get(props, 'content', 'missing data')
  const url = get(props, 'url', 'missing data')
  return (
    <Table.Cell {...cellProps} >
      <p>
        {content}&nbsp;
        <a href={url} ><GenomiX.ExternalIcon /></a>
      </p>
    </Table.Cell>
  );
}

ExternalLinkCell.propTypes = {
  content: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

ExternalLinkCell.defaultProps = {
};

export default ExternalLinkCell;
