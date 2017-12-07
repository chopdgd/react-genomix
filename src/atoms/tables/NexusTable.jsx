import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';


class NexusTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {

    return (
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>
                Table Name
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>
              Data
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              Data
            </Table.Cell>
          </Table.Row>
        </Table.Body>
        </Table>
    );
  }
}


NexusTable.propTypes = {};


NexusTable.defaultProps = {};


export default NexusTable;
