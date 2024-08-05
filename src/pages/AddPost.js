import React, { useState } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import {
  collection,
  addDoc,
  getDoc,
  updateDoc,
  doc,
  setDoc,
  Timestamp,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../firebase";

import { v4 as uuidv4 } from "uuid";

import "./Pages.css";

function AddPost() {
  const [txt, setTxt] = useState("");
  const [title, setTitle] = useState("");
  const [img, setImg] = useState(NaN);
  const [code , setCode] = useState("");

  const handlerUpload = async (event) => {
    try {
      // Dosya nesnesini al
      const file = event.target.files[0];

      if (!file) {
        console.error("No file selected");
        return;
      }

      // Dosya referansını oluştur
      const imgRef = ref(storage, `images/${uuidv4()}`);

      // Dosyayı yükle
      const uploadResult = await uploadBytes(imgRef, file);
      console.log("Upload result:", uploadResult);

      // Yüklenen dosyanın URL'sini al
      const downloadURL = await getDownloadURL(uploadResult.ref);
      console.log("File URL:", downloadURL);

      // URL'yi duruma kaydet
      setImg(downloadURL);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };
  const handlerTitleUpload = (e) => {
    setTitle(e.target.value);
  };
  const handlerTextUpload = (e) => {
    setTxt(e.target.value);
  };
  const handlerCodeUpload = (e) => {
    setCode(e.target.value);
  }
  const handlerSubmit = async () => {
    const counterDocRef = doc(db, "counters", "post");
    const counterDecSnap = await getDoc(counterDocRef);
    let currentId = 0;
    if (counterDecSnap.exists()) {
      currentId = counterDecSnap.data().currentId;
    } else {
      await setDoc(counterDocRef, { currentId: 0 });
      currentId++;
    }

    const valRef = collection(db, "post");
    const data = await addDoc(valRef, {
      id: currentId,
      titleVal: title,
      TxtVal: txt,
      CodeVal: code,
      ImgVal: img,
      timestamp: Timestamp.fromDate(new Date()),
    });
    await updateDoc(counterDocRef, { currentId: currentId + 1 });
    console.log(data, "data");

    alert(`Veriler eklendi kontrol et `);
  };

  return (
    <div>
      <Container id="addpost-card" className="p-3">
        <Form>
          <Row>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Yazı Başlığı</Form.Label>
              <Form.Control
                type="text"
                onChange={handlerTitleUpload}
                placeholder="Yazı Başlığı Giriniz"
              />
            </Form.Group>
          </Row>

          <Row>
            {" "}
            <Col>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Konuyu Buraya Yazınız.</Form.Label>
                <div className="custom-quill-container">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    onChange={handlerTextUpload}
                  />
                  <br />
                </div>
              </Form.Group>
            </Col>
            <Col>
            <Form.Control
                    as="textarea"
                    rows={3}
                    onChange={handlerCodeUpload}
                  />
            </Col>
            <Form.Label>
                  Buradan Sıra ile Gireceğiniz Resimleri Seçiniz.
                </Form.Label>
                <Form.Control type="file" onChange={(e) => handlerUpload(e)} />
          </Row>

          <Button className="mb-2" variant="secondary" onClick={handlerSubmit}>
            {"Kaydet"}
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default AddPost;
