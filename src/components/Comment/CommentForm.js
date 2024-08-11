import React, { useState ,useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { db, auth } from "../../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
function CommentForm({ postId }) {
  const user = auth.currentUser;
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userName, setUserName] = useState("");
  // const handlerSubmit = async (name, comment) => {
  //   try {
  //     const response = await fetch("/api/add-comments", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ name, comment }),
  //     });

  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }

  //     const result = await response.json();
  //     console.log(result);
  //     alert("Comment added successfully");
  //   } catch (error) {
  //     console.error("Error:", error);
  //     alert("An error occurred while adding the comment.");
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };
  
  useEffect(() => {
    // Kullanıcı durumu değişikliklerini dinle
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Kullanıcı giriş yaptıysa
        const displayName = user.displayName || "Kullanıcı Adı Yok";
        setUserName(displayName);
      } else {
        // Kullanıcı çıkış yaptıysa
        setUserName("");
      }
    });

    // Temizlik işlevi: Dinleyiciyi kaldır
    return () => unsubscribe();
  }, []);
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
        <Form.Control
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
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
