import React, { useState } from "react";
import { Container, Form, Row, Button } from "react-bootstrap";
import {
  collection,
  query,
  where,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import "./Pages.css";
import Footer from "../components/Footer";
function DeletePost() {
  const [title, setTitle] = useState("");

  // const handlerPostDelete = async () => {
  //   try {
  //     const response = await fetch(`/api/delete-post/${encodeURIComponent(title)}`, {
  //       method: "DELETE",
  //     });
  
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }
  
  //     const result = await response.json();
  //     console.log(result);
  //     alert("Post deleted successfully");
  //   } catch (error) {
  //     console.error("Error:", error);
  //     alert("An error occurred while deleting the post.");
  //   }
  // };
  
  const handlerPostDelete = async () => {
    try {
      const postRef = collection(db, "post");
      const q = query(postRef, where("titleVal", "==", title));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        alert("yazdığınız başlık ile eşleşen bir başlık yok");
      }
      querySnapshot.forEach(async (element) => {
        await deleteDoc(element.ref);
        console.log(`${title} ile eşleşen başlıkta olan post silindi. `);
      });
      alert(`Başlık "${title}" olan post(lar) silindi.`);
    } catch (error) {
      console.error("Post silinirken hata oluştu:", error);
      alert("Post silinirken bir hata oluştu.");
    }
  };
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  return (
    <>
      <Container id="deletepost-container">
        <Row>
          <Form>
            <Form.Group>
              <Form.Label>
                Silmek istediğiniz postun başlığını giriniz.
              </Form.Label>
              <Form.Control
                type="text"
                onChange={handleTitleChange}
                placeholder="Yazı Başlığı Giriniz"
              />
            </Form.Group>
            <Button
              className="m-3"
              variant="danger"
              onClick={handlerPostDelete}>
              Sil
            </Button>
          </Form>
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default DeletePost;
