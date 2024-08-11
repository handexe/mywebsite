import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Image, Placeholder } from "react-bootstrap";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import "./Pages.css";
import MonacoEditorComponent from "../components/MonacoEditor/MonacaEditor";
import CommentForm from "../components/Comment/CommentForm";
import CommentList from "../components/Comment/CommentList";
import Footer from "../components/Footer";
function Post() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  // useEffect(() => {
  //   const fetchPost = async () => {
  //     try {
  //       const response = await fetch(`/api/get-post/${postId}`);
  
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  
  //       const postData = await response.json();
  //       setPost(postData);
  //     } catch (error) {
  //       console.error('Error fetching post:', error);
  //     }
  //   };
  
  //   fetchPost();
  // }, [postId]);
  
  useEffect(() => {
    const fetchPost = async () => {
      const docSnap = await getDoc(doc(db, "post", postId));

      if (docSnap.exists()) {
        setPost(docSnap.data());
      } else {
        console.log("Post bulunamadı.");
      }
    };

    fetchPost();
  }, [postId]);


  return (
    <div style={{ margin: "0px" }}>
      {post ? (
        <Container id="post-con">
          <Row>
            <Col md={9}>
              <Container className="p-4" id="post">
                <Row>
                  <p className="h5 mb-4">{post.titleVal}</p>
                </Row>
                <Row className="m-2 mb-4 ">{post.TxtVal}</Row>
                {post.ImgVal ? (
                  <Row>
                    <Image
                      src={post.ImgVal}
                      alt="Örnek Resim"
                      style={{ maxWidth: "30%", height: "auto" }}
                      thumbnail
                    />
                  </Row>
                ) : (
                  <Row></Row>
                )}
              </Container>
            </Col>

            <Col md={3} id="code-blog">
              <MonacoEditorComponent data={post.CodeVal} />
            </Col>
          </Row>
          <Row className="p-2" id="comments-blok">
            <CommentForm postId={postId} />
            <br />
            <CommentList postId={postId} />
          </Row>
        </Container>
      ) : (
        <Container id="post-con">
          <Row>
            <Col md={9}>
              <Container className="p-4" id="post">
                <Placeholder as={Container} animation="glow">
                  <Placeholder xs={4} size="lg" />
                </Placeholder>
                <br />
                <Placeholder as="p" animation="glow">
                  <Placeholder xs={8} size="lg" />
                  <Placeholder xs={9} />
                  <Placeholder xs={10} />
                </Placeholder>
              </Container>
            </Col>
          </Row>
          
          <Row className="p-2" id="comments-blok">
            <Placeholder as="p" animation="glow">
            <Placeholder xs={4} size="lg" />
            <br/>
            <br/>
            <Placeholder xs={3} size="lg" />
            <Placeholder xs={7} size="lg" />
            </Placeholder>
          </Row>
        </Container>
      )}
      <Footer/>
    </div>
  );
}

export default Post;
