import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'semantic-ui-react'
import { get } from 'lodash'


class SaveForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      formValues: get(props, 'defaultValues', {})
    }
  }

  handleChange = (e, { name, value }) => {
    this.setState({
      formValues: {
        ...this.state.formValues,
        [name]: value
      }
    })
  }

  onSubmit = () => {
    this.props.onSubmit(this.state.formValues)
    this.setState({
      formValues: {}
    })
  }

  render() {
    const formInputs = React.Children.map(this.props.children, (input: React.ReactElement<InputPropsInternal>) =>
      React.cloneElement(input, {
        value: get(this.state, `formValues.${input.props.name}`, ''),
        onChange: this.handleChange
      })
    )

    let button;
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
  onSubmit: PropTypes.func.isRequired,
  defaultValues: PropTypes.shape({}),
  saveButton: PropTypes.element,
}

SaveForm.defaultProps = {
  defaultValues: {},
  saveButton: undefined,
}

export default SaveForm
