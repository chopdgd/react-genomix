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

const Forms = () => {
  const initialState = { input1: '1', input2: '2', input3: '3' }
  const [state] = useState(initialState)

  return (
    <Grid padded centered>
      <Grid.Column width={6}>
        <GenomiX.SaveForm
          id="example-form"
          formId="example-form"
          handleSubmit={data => console.log(data)}
          saveButton={<GenomiX.Button icon="save" content="Save" />}
          defaultValues={state}
        >
          <Form.Input id="input1" label="input 1" name="input1" defaultValue="1" />
          <Form.Input id="input2" label="input 2" name="input2" defaultValue="2" />
          <Form.Input id="input3" label="input 3" name="input3" control={Dropdown} defaultValue="3" />
        </GenomiX.SaveForm>
      </Grid.Column>
    </Grid>
  )
}

export default Forms
