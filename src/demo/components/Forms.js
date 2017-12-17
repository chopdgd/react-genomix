import React from 'react'
import { Form, Grid } from 'semantic-ui-react'

import * as GenomiX from 'LibIndex'


const Forms = () => (
  <Grid padded centered>
    <Grid.Column width={6}>
      <GenomiX.SaveForm
        id="example-form"
        onSubmit={(values) => alert(JSON.stringify(values))}
        saveButton={<GenomiX.Button icon="save" content="Save"/>}
      >
        <Form.Input
          id="input-form-1"
          label="input form 1"
          name="input-form-1"
        />
        <Form.Input
          id="input-form-2"
          label="input form 2"
          name="input-form-2"
        />
      </GenomiX.SaveForm>
    </Grid.Column>
  </Grid>
)

export default Forms
