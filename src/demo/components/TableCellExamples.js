import React from 'react'
import { Table } from 'semantic-ui-react'

import { CheckboxCell, DropdownCell, TextCell, LinkCell } from 'LibIndex'


class ExampleTableCells extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: ''
    }
  }

  onChange = (index) => {
    alert(index)
  }

  onChange2 = (data) => {
    alert(JSON.stringify(data))
  }

  render() {
    const { value } = this.state

    return (
      <Table>

        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>
              Checkbox
            </Table.HeaderCell>
            <Table.HeaderCell>
              Dropdown
            </Table.HeaderCell>
            <Table.HeaderCell>
              Text
            </Table.HeaderCell>
            <Table.HeaderCell>
              Link
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <CheckboxCell
              as="td"
              rowIndex={1}
              onChange={this.onChange}
            />
            <DropdownCell
              as="td"
              name="test"
              value={value}
              rowIndex={1}
              onChange={this.onChange2}
              options={[
                { key: 'key1', value: 1, text: '1', content: <h1>Hi Mike</h1>},
                { key: 'key2', value: 2, text: '2'}
              ]}
            />
            <TextCell as="td" content="text" />
            <LinkCell as="td" path="http://www.google.com" content="google" />
          </Table.Row>
        </Table.Body>

      </Table>
    )
  }
}


export default ExampleTableCells
