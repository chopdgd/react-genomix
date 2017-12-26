import React from 'react'
import { Cell, Column } from 'fixed-data-table-2'
import { Dropdown, Grid } from 'semantic-ui-react'

import {
  FixedDataTable
} from 'LibIndex'


const rows = [0,1,2]

let rowHeight = (rows.length + 1) * 65

if (rowHeight > 600) {
  rowHeight = 600
}

const options = [
  { key: 'key', value: 1, text: 'hi' },
  { key: 'key2', value: 2, text: 'bye' }
]


class FixedDataTableExample extends React.PureComponent {
  render() {
    return (
      <Grid padded centered>
        <Grid.Column width={16} textAlign="center">
          <FixedDataTable
            maxHeight={500}
            rowsCount={rows.length}
            headerHeight={65}
            rowHeight={65}
          >
            <Column
              columnKey="sentence"
              header={<Cell>Row 1</Cell>}
              cell={({rowIndex, ...props}) => (
                <Cell {...props}>
                  <Dropdown
                    name="hi"
                    selection
                    search
                    options={options}
                    onChange={() => alert('hi')}
                  />
                </Cell>
              )}
              width={200}
            />
          </FixedDataTable>
        </Grid.Column>
      </Grid>
    )
  }
}


export default FixedDataTableExample
