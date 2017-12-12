import React from 'react';
import PropTypes from 'prop-types';
import { Table, Checkbox } from 'semantic-ui-react';
import { omit, get } from 'lodash';

const CheckboxCell = ({...props}) => {
  const cellProps = omit(props, ['content', 'onChange'])
  const content = get(props, 'content', '')
  const onChange = get(props, 'onChange')
  return (
    <Table.Cell
      {...cellProps}
      content={
        <p>
          <Checkbox
            onChange={onChange}
          />
          &nbsp;&nbsp;
          {content}
        </p>
      }
    />
  );
}

CheckboxCell.propTypes = {
  onChange: PropTypes.func.isRequired,
  content: PropTypes.string,
};

CheckboxCell.defaultProps = {
  content: '',
};

export default CheckboxCell;
