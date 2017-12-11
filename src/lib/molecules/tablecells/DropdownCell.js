import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import { omit, get } from 'lodash';

const DropdownCell = ({...props}) => {
  const cellProps = omit(props, ['options'])
  const dropdown = get(props, 'dropdown')
  return (
    <Table.Cell
      {...cellProps}
    >
      {dropdown}
    </Table.Cell>
  );
}

DropdownCell.propTypes = {
  dropdown: PropTypes.object.isRequired,
};

DropdownCell.defaultProps = {
};

export default DropdownCell;
