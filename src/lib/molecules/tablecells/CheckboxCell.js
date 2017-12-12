import React from 'react';
import PropTypes from 'prop-types';
import { Table, Checkbox } from 'semantic-ui-react';
import { omit, get } from 'lodash';

const CheckboxCell = ({...props}) => {
  const cellProps = omit(props, ['content'])
  const content = get(props, 'content', '')
  return (
    <Table.Cell
      {...cellProps}
      content={
        <p>
          {content}&nbsp;
          <Checkbox />
        </p>
      }
    />
  );
}

CheckboxCell.propTypes = {
  content: PropTypes.string,
};

CheckboxCell.defaultProps = {
  content: '',
};

export default CheckboxCell;
