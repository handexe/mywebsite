import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { db, auth } from "../../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
function CommentForm({ postId }) {
  const user = auth.currentUser;
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlerSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    if (!user) {
      alert("Lütfen Giriş Yapınız!");
      setIsSubmitting(false);
      return;
    }
    try {
      const valRef = collection(db, "comments");
      await addDoc(valRef, {
        postId,
        name: user.displayName,
        email: user.email,
        comment,
        timestamp: Timestamp.fromDate(new Date()),
      });
      alert("Yorum Gönderildi");
      setComment("");
    } catch (error) {
      console.error("Yorum Gönderme Hatası : ", error);
      alert("Yorum Gönderilken Hata Oluştu ");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form onSubmit={handlerSubmit}>
      <Form.Group controlId="formName" className="m-2">
        <Form.Label>Adınız</Form.Label>
        <Form.Control type="text" value={user.displayName} readOnly />
      </Form.Group>
      <Form.Group controlId="formComment" className="m-2">
        <Form.Label>Yorum Yapınız</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          placeholder="Yorumunuzu buraya yazın"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
      </Form.Group>
      <Button
        className="m-2"
        variant="secondary"
        type="submit"
        disabled={isSubmitting}>
        {" "}
        {isSubmitting ? "Gönderiliyor..." : "Gönder"}{" "}
      </Button>
    </Form>
  );
}

export default CommentForm;
