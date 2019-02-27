import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'semantic-ui-react'

class SaveForm extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = props.defaultValues
  }

  onChange = (e, { name, value }) => {
    const { handleChange } = this.props
    if (handleChange) {
      handleChange(e, { name, value })
    }

    this.setState({
      [name]: value,
    })
  }

  onSubmit = e => {
    e.preventDefault()
    const { handleSubmit } = this.props

    if (handleSubmit) {
      handleSubmit(this.state)
    }
  }

  render() {
    const { children, formId, saveButton } = this.props

    const formInputs = React.Children.map(children, input =>
      React.cloneElement(input, {
        onChange: this.onChange,
      })
    )

    let button
    if (saveButton) {
      button = React.cloneElement(saveButton, {
        type: 'submit',
        form: formId,
      })
    }

    return (
      <Form id={formId} onSubmit={this.onSubmit}>
        {formInputs}
        {button}
      </Form>
    )
  }
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
