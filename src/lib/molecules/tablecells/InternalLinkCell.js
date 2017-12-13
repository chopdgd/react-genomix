import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import { omit, get } from 'lodash';

import * as GenomiX from 'LibIndex'

const InternalLinkCell = ({...props}) => {
  const cellProps = omit(props, ['content', 'url'])
  const content = get(props, 'content', 'missing data')
  const url = get(props, 'url', 'missing data')
  return (
    <Table.Cell {...cellProps} >
      <p>
        {content}&nbsp;
        <a href={url} ><GenomiX.InfoIcon /></a>
      </p>
    </Table.Cell>
  );
}

InternalLinkCell.propTypes = {
  content: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

InternalLinkCell.defaultProps = {
};

export default InternalLinkCell;
