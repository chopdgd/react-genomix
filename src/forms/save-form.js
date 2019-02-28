import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Form } from 'semantic-ui-react'

const SaveForm = ({ defaultValues, handleChange, handleSubmit, children, formId, saveButton }) => {
  const [state, setState] = useState(defaultValues)

  const onChange = (e, { name, value }) => {
    if (handleChange) handleChange(e, { name, value })
    setState({ ...state, [name]: value })
  }

  const onSubmit = e => {
    e.preventDefault()
    if (handleSubmit) handleSubmit(state)
  }

  const formInputs = React.Children.map(children, input => React.cloneElement(input, { onChange: onChange }))

  let button
  if (saveButton) button = React.cloneElement(saveButton, { type: 'submit', form: formId })

  return (
    <Form id={formId} onSubmit={onSubmit}>
      {formInputs}
      {button}
    </Form>
  )
}

SaveForm.propTypes = {
  formId: PropTypes.string.isRequired,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  saveButton: PropTypes.element,
}

SaveForm.defaultProps = {
  saveButton: undefined,
}

export default SaveForm
