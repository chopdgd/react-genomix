import React from 'react';
import PropTypes from 'prop-types';
import { Table, Checkbox } from 'semantic-ui-react';
import { omit } from 'lodash';

const CheckboxCell = ({...props}) => {
  const cellProps = omit(props, ['content'])
  return (
    <Table.Cell
      {...cellProps}
    >
      <Checkbox />
    </Table.Cell>
  );
}

CheckboxCell.propTypes = {
};

CheckboxCell.defaultProps = {
};

export default CheckboxCell;
