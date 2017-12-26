SaveFormModal
------------------

This is intended to be an a form we can re-use right out of the box.  But instead of being directly on a page, it can be rendered in a [Modal](https://react.semantic-ui.com/modules/modal)  The idea is to pass in `<FormInput>` as children, and this will handle the rest.

### Prop Types

| Property | Type | Required? | Default | Description |
|:---|:---|:---:|:---|:---|
| formId | String | ✓ |  | Form id |
| trigger | Element | ✓ |  | Component to trigger the opening of the Modal |
| title | String | ✓ |  | Title of form |
| onSubmit | Function | ✓ |  | Callback to handle the submission of the form. See [onSubmit](#onsubmit) |
| open | Boolean | | false | Modal is open when true and closed when false |
| defaultValues | Object |  |  | Default values to apply to inputs |


#### onSubmit

This will pass back a JSON with key/value pairs for all the input fields.  The idea is that this callback can be a Redux action creator or dealing with state on a different component.

#### Example

```javascript
import React from 'react'
import { Form } from 'semantic-ui-react'

import { SaveFormModal } from 'react-genomix'


const Form = () => (
  <SaveFormModal
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
  </SaveFormModal>
)

export default Forms
````
