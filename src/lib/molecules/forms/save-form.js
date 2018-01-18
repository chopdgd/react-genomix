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
      [name]: value
    })
  }

  onSubmit = () => {
    const { handleSubmit } = this.props

    if (handleSubmit) {
      handleSubmit(this.state)
    }
  }

  render() {
    const formInputs = React.Children.map(this.props.children, (input: React.ReactElement<InputPropsInternal>) =>
      React.cloneElement(input, {
        onChange: this.onChange
      })
    )

    let button
    if (this.props.saveButton) {
      button = React.cloneElement(this.props.saveButton, {
        type: 'submit',
        form: this.props.id,
      })
    }

    return (
      <Form id={this.props.id} onSubmit={this.onSubmit}>
        {formInputs}
        {button}
      </Form>
    )
  }
}


SaveForm.propTypes = {
  id: PropTypes.string.isRequired,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  saveButton: PropTypes.element,
}

SaveForm.defaultProps = {
  saveButton: undefined,
}

export default SaveForm
