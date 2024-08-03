import React, { useState, useEffect } from "react";
import { Card, Container, Row } from "react-bootstrap";
import { db } from "../../firebase";
import { collection, query, where, orderBy, getDocs } from "firebase/firestore";
import PropTypes from 'prop-types';
CommentList.propTypes = {
  postId: PropTypes.string.isRequired, // veya uygun tip
};
function CommentList({ postId }) {
  const [comment, setComment] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        // Firestore query with collection, where, and orderBy
        const commentsRef = collection(db, "comments");
        const q = query(
          commentsRef,
          where("postId", "==", postId),
          orderBy("timestamp", "desc")
        );
        const snapshot = await getDocs(q);

        const commentsList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("Fetched Comments: ", commentsList);
        setComment(commentsList);
      } catch (error) {
        console.error("Yorumlar alınırken hata oluştu: ", error);
      }
    };

    fetchComments();
  }, [postId]);

  return (
    <Container>
      <Row>
        <p className="h3 m-2">Yorumlar</p>
      </Row>
      {comment.length === 0 ? (
        <p className="h6 m-2">Henüz Yorum Yapılmadı. İlk Yorumu Sen Yap.</p>
      ) : (
        comment.map((cmnt) => (
          <Row key={cmnt.id} className="m-4">
            <Card>
              <Card.Body className="p-4">
                <Card.Text>
                  <h6>
                    {cmnt.name}{"  "}
                    {new Date(cmnt.timestamp?.toDate()).toLocaleString()}
                  </h6>
                </Card.Text>
                <Card.Text>
                  {" "}
                  <p>{cmnt.comment}</p>{" "}
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
        ))
      )}
    </Container>
  );
}

export default CommentList;
