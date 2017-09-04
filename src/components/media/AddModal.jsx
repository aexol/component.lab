import React,
{
  PropTypes
}
from 'react'
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
}
from 'reactstrap';
import classnames from 'classnames';
import FontAwesome from 'react-fontawesome';
import FormGen from '../../utils/formgen.jsx';
class AddModal extends React.Component {
  render () {
    const {
      actions,
      isOpen,
      toggle,
      fields,
      endpoint,
      text,
      name,
      initialData = {}
    } = this.props;
    return (
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>{text}</ModalHeader>
        <ModalBody>
          <FormGen fields={fields} submitText="Dodaj" validate={(e) => {
          actions.addModel({
            endpoint,
            name,
            reducer: name,
            data   : {
              ...initialData,
              ...e
            }
          })
          toggle();
        }}/>
        </ModalBody>
      </Modal>
    )
  }
}
export
default AddModal