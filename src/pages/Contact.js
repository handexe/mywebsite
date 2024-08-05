import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Container, Form, Button } from "react-bootstrap";
import "./Pages.css";
import ContactModal from "./ContactModal";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function Contact({ userEmail, isAuth }) {
  const [state, handleSubmit] = useForm("mvgpawqo");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    if (!isAuth) {
      e.preventDefault();
      alert("Lütfen giriş yapınız!");
      navigate("/login");
    } else {
      handleSubmit(e);
    }
  };

  useEffect(() => {
    if (state.succeeded) {
      setShowModal(true);
    }
  }, [state.succeeded]);

  const handleCloseModal = () => setShowModal(false);

  return (
    <Container id="contact-container" className="p-4">
      <Form onSubmit={handleFormSubmit}>
        <Form.Group>
          <Form.Label htmlFor="email">Email Adres</Form.Label>
          <Form.Control
            id="email"
            type="email"
            name="email"
            readOnly
            value={userEmail}
            className="mb-2"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <Form.Label>Açıklama</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            id="message"
            name="message"
            className="mb-2"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <Button variant="secondary" type="submit" disabled={state.submitting}>
            Gönder
          </Button>
        </Form.Group>
      </Form>
      {showModal && <ContactModal showModal={showModal} handleClose={handleCloseModal} />}
      <Footer/>
    </Container>
  );
}

export default Contact;