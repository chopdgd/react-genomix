SaveForm
------------------

This is intended to be an a form we can re-use right out of the box.  The idea is to pass in `<FormInput>` as children, and this will handle the rest.

### Prop Types

| Property | Type | Required? | Default | Description |
|:---|:---|:---:|:---|:---|
| id | String | ✓ |  | Form id |
| onSubmit | Function | ✓ |  | Callback to handle the submission of the form. See [onSubmit](#onsubmit) |
| defaultValues | Object |  |  | Default values to apply to inputs |
| saveButton | Element |  |  | Element to use as the event trigger to submit form |


#### onSubmit

This will pass back a JSON with key/value pairs for all the input fields.  The idea is that this callback can be a Redux action creator or dealing with state on a different component.

#### Example

```javascript
import React from 'react'
import { Form } from 'semantic-ui-react'

import { SaveForm } from 'react-genomix'


const Form = () => (
  <SaveForm
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
  </SaveForm>
)

export default Forms
````
