import React from 'react'
import PropTypes from 'prop-types'
import { Modal } from 'semantic-ui-react'
import { get } from 'lodash'

import { Button, CancelButton, SaveForm } from 'LibIndex'


class FormModal extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      visible: get(props, 'open', false),
    }
  }

  onSubmit = values => {
    const { handleSubmit } = this.props
    if (handleSubmit) {
      handleSubmit(values)
    }

    this.close()
  }

  open = () => {
    this.setState({ visible: true })
  }

  close = () => {
    this.setState({ visible: false })
  }

  render() {
    const {
      cancelButton,
      children,
      defaultValues,
      formId,
      handleChange,
      saveButton,
      title
    } = this.props

    const { visible } = this.state

    const trigger = React.cloneElement(this.props.trigger, {
      onClick: this.open,
    })

    const save = React.cloneElement(saveButton, {
      type: 'submit',
      form: formId,
    })

    const cancel = React.cloneElement(cancelButton, {
      onClick: this.close,
    })

    return (
      <Modal
        trigger={trigger}
        open={visible}
      >
        <Modal.Header>{title}</Modal.Header>

        <Modal.Content>
          <SaveForm
            formId={formId}
            defaultValues={defaultValues}
            handleChange={handleChange}
            handleSubmit={this.onSubmit}
          >
            {children}
          </SaveForm>
        </Modal.Content>

        <Modal.Actions>
          {save}
          {cancel}
        </Modal.Actions>
      </Modal>
    )
  }
}


FormModal.propTypes = {
  formId: PropTypes.string.isRequired,
  trigger: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  open: PropTypes.bool,
  defaultValues: PropTypes.shape({}),
  saveButton: PropTypes.any,
  cancelButton: PropTypes.any,
}

FormModal.defaultProps = {
  open: false,
  defaultValues: {},
  saveButton: (
    <Button
      type="submit"
      content="Save"
      icon="save"
      color="action-positive"
      inverted
    />
  ),
  cancelButton: <CancelButton inverted />
}


export default FormModal
