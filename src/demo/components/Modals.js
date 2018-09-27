import React from 'react'
import { Form, Grid } from 'semantic-ui-react'

import * as GenomiX from 'lib'


class Dropdown extends React.PureComponent {
  render() {
    const { options, searchAction, ...rest } = this.props

    return (
      <GenomiX.AutoCompleteDropDown
        name="dropdown"
        label="dropdown"
        endpoint="?limit=25&search="
        searchAction={(data) => console.log(data)}
        options={[
          {key: '3', value: '3', text: '3'},
          {key: '4', value: '4', text: '4'},
        ]}
        {...rest}
      />
    )
  }
}


class Modals extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      input1: '1',
      input2: '2',
      input3: '3',
    }
  }

  handleChange = (e, { name, value }) => {
    console.log(value)
  }

  handleSubmit = data => {
    console.log(data)
  }

  render() {
    return (
      <Grid padded centered>
        <Grid.Column width={6}>
          <GenomiX.FormModal
            className="example-modal"
            formId="example"
            trigger={<GenomiX.Button icon="tasks" content="Open"/>}
            title="Example Modal"
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            defaultValues={this.state}
          >
            <Form.Input
              id="input1"
              label="input 1"
              name="input1"
              defaultValue="1"
            />
            <Form.Input
              id="input2"
              label="input 2"
              name="input2"
              defaultValue="2"
            />
            <Form.Input
              id="input3"
              label="input 3"
              name="input3"
              control={Dropdown}
              defaultValue="3"
            />
          </GenomiX.FormModal>
        </Grid.Column>
      </Grid>
    )
  }
}

export default Modals
