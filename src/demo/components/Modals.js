import React from 'react'
import { Form, Grid } from 'semantic-ui-react'

import * as GenomiX from 'LibIndex'


const Modals = () => (
  <Grid padded centered>
    <Grid.Column width={6}>
      <GenomiX.SaveFormModal
        className="example-modal"
        formId="example"
        trigger={<GenomiX.Button icon="tasks" content="Open"/>}
        title="Example Modal"
        onSubmit={(values) => alert(JSON.stringify(values))}
      >
        <Form.Input
          id="input-modal-1"
          label="Input 1"
          name="input-modal-1"
        />
        <Form.Input
          id="input-modal-2"
          label="Input 2"
          name="input-modal-2"
        />
      </GenomiX.SaveFormModal>
    </Grid.Column>
  </Grid>
)

export default Modals
