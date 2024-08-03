import React, { useEffect, useState } from "react";
import { getDocs, collection , query ,orderBy } from "firebase/firestore";
import { db } from "../firebase";
import "./Pages.css";
import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
function Blog({ isAuth }) {
  const [data, setData] = useState([]);

  const getData = async () => {
    const valReff = collection(db, "post");
    // Sıralama ve sorgu oluşturun
    const q = query(valReff, orderBy("id", "desc"));

    const dataDb = await getDocs(q);
    const allData = dataDb.docs.map((val) => ({ ...val.data(), id: val.id }));
    setData(allData);
  };
  useEffect(() => {
    getData();
  });

  return (
    <div>
      <Container id="blog-posts-container">
        {data.map((post) => (
          <Card id="posts-blog">
            <Card.Body>
              <Card.Title as="h5">{post.titleVal}</Card.Title>
              <Card.Text>{post.TxtVal}</Card.Text>
              <Link to={`/blog/${post.id}`} >
                Posta git
              </Link>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </div>
  );
}

export default Blog;
