import React from 'react';
import { Modal } from 'react-bootstrap';

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
