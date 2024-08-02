import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Container, Row, Form, Button } from "react-bootstrap";
import "../components.css";
function Contact({ userEmail }) {
  const [state, handleSubmit] = useForm("mvgpawqo");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <Container id="contact-container" className="p-4">
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor="email">Email Adres</Form.Label>
          <Form.Control id="email" type="email" name="email" readOnly value={userEmail} className="mb-2" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <Form.Label>Açıklama</Form.Label>
          <Form.Control as="textarea" rows={4} id="message" name="message" className="mb-2"/>
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
    </Container>
  );
}

export default Contact;
