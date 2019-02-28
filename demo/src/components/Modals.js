import React, { useState } from 'react'
import { Form, Grid } from 'semantic-ui-react'

import * as GenomiX from '../../../src'

const Dropdown = ({ options, searchAction, ...rest }) => (
  <GenomiX.AutoCompleteDropDown
    name="dropdown"
    label="dropdown"
    endpoint="?limit=25&search="
    searchAction={data => console.log(data)}
    options={[{ key: '3', value: '3', text: '3' }, { key: '4', value: '4', text: '4' }]}
    {...rest}
  />
)

const Modals = () => {
  const initialState = { input1: '1', input2: '2', input3: '3' }
  const [state] = useState(initialState)

  return (
    <Grid padded centered>
      <Grid.Column width={6}>
        <GenomiX.FormModal
          className="example-modal"
          formId="example"
          trigger={<GenomiX.Button icon="tasks" content="Open" />}
          title="Example Modal"
          handleChange={(e, { value }) => console.log(value)}
          handleSubmit={data => console.log(data)}
          defaultValues={state}
        >
          <Form.Input id="input1" label="input 1" name="input1" defaultValue="1" />
          <Form.Input id="input2" label="input 2" name="input2" defaultValue="2" />
          <Form.Input id="input3" label="input 3" name="input3" control={Dropdown} defaultValue="3" />
        </GenomiX.FormModal>
      </Grid.Column>
    </Grid>
  )
}

export default Modals
