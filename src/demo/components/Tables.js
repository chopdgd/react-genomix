import React from 'react';
import { Divider, Table, Grid } from 'semantic-ui-react';

import * as GenomiX from 'LibIndex';


const Tables = () => (
  <Grid padded centered>

    <Grid.Row>

      <Grid.Column width={16} textAlign="center">
        <h1>Tables</h1>
        <Divider />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>

      <Grid.Column width={6} textAlign="center">
        <Table>
          <Table.Body>
            <Table.Row>
              <GenomiX.TableCell />
              <GenomiX.TextCell content="text cell info" />
              <GenomiX.TextCell />
            </Table.Row>
          </Table.Body>
        </Table>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default Tables;
