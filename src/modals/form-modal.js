import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Modal } from 'semantic-ui-react'

import { Button, CancelButton, SaveForm } from '../index'

const FormModal = ({ open, handleSubmit, ...props }) => {
  const { cancelButton, children, defaultValues, formId, handleChange, saveButton, title } = props
  const [visible, setVisible] = useState(open)

  const onSubmit = values => {
    if (handleSubmit) handleSubmit(values)
    setVisible(false)
  }

  const trigger = React.cloneElement(props.trigger, {
    onClick: () => setVisible(true),
  })

  const save = React.cloneElement(saveButton, {
    type: 'submit',
    form: formId,
  })

  const cancel = React.cloneElement(cancelButton, {
    onClick: () => setVisible(false),
  })

  return (
    <Modal trigger={trigger} open={visible}>
      <Modal.Header>{title}</Modal.Header>

      <Modal.Content>
        <SaveForm formId={formId} defaultValues={defaultValues} handleChange={handleChange} handleSubmit={onSubmit}>
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
  saveButton: <Button type="submit" content="Save" icon="save" color="action-positive" inverted />,
  cancelButton: <CancelButton inverted />,
}

export default FormModal
