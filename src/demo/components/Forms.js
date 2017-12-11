import React from 'react'
import { Divider, Form, Grid } from 'semantic-ui-react'

import * as GenomiX from 'LibIndex'


const Forms = () => (
  <Grid padded centered>

    <Grid.Row>

      <Grid.Column width={16} textAlign="center">
        <h1>Forms</h1>
        <Divider />
      </Grid.Column>

    </Grid.Row>

    <Grid.Row>

      <Grid.Column width={6} textAlign="center">
        <GenomiX.SaveFormModal
          className="example-modal"
          formId="example"
          trigger={<GenomiX.Button icon="tasks" content="Open"/>}
          title="Example Modal"
          onSubmit={(values) => alert(JSON.stringify(values))}
        >
          <Form.Input id="input-modal-1" name="input-modal-1" />
          <Form.Input id="input-modal-2" name="input-modal-2" />
        </GenomiX.SaveFormModal>
      </Grid.Column>

      <Grid.Column width={10} textAlign="center">
        <GenomiX.SaveForm
          id="example-form"
          onSubmit={(values) => alert(JSON.stringify(values))}
          saveButton={<GenomiX.Button icon="save" content="Save"/>}
        >
          <Form.Input id="input-form-1" name="input-form-1" />
          <Form.Input id="input-form-2" name="input-form-2" />
        </GenomiX.SaveForm>
      </Grid.Column>

    </Grid.Row>
  </Grid>
)

export default Forms
