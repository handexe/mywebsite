import React from 'react';
import { Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';

ContactModal.propTypes = {
  showModal: PropTypes.string.isRequired,
  handleClose: PropTypes.string.isRequired, // veya uygun tip
};
function ContactModal({ showModal, handleClose }) {
  return (
    <div>
      <Modal
        size="md"
        show={showModal}
        onHide={handleClose}
        aria-labelledby="modal-title-md"
      >
        <Modal.Header closeButton>
          <Modal.Title>Teşekkürler!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Sana en kısa sürede cevap vermeye çalışacağım</Modal.Body>
      </Modal>
    </div>
  );
}

export default ContactModal;
