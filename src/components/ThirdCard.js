import React, { useEffect, useState } from "react";
import { Container, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";
import { db } from "../firebase";
const ThirdCard = () => {
  const [data, setData] = useState([]);

  // const fetchTop2Posts = async () => {
  //   try {
  //     const response = await fetch('http://localhost:3001/api/posts/', {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }
  
  //     const topPosts = await response.json();
  //     setData(topPosts);
  //     // topPosts ile işlemler yapabilirsiniz (örneğin, state'e kaydetmek)
  //   } catch (error) {
  //     console.error('Error:', error);
  //     alert('An error occurred while fetching top 2 posts.');
  //   }
  // };
  // useEffect(() => {
  //   fetchTop2Posts();
  // }, []);

  
  const getData = async () => {
    const valReff = collection(db, "post");
    // Sıralama ve sorgu oluşturun
    const q = query(valReff, orderBy("id", "desc") , limit(2));

    const dataDb = await getDocs(q);
    const allData = dataDb.docs.map((val) => ({ ...val.data(), id: val.id }));
    setData(allData);
  };
  useEffect(() => {
    getData();
  });

  return (
    <Container id="third-card">
      <Row className="p-3">
        <h3>Son Yazılar</h3>
      </Row>

      <Row>
        {data.length === 0 ? (
          <Row>
            <p>Henüz yazı yok.</p>
          </Row>
        ) : (
          data.map((post) => (
            <Card
              key={post.id}
              style={{
                width: "60rem",
                margin: "auto",
                marginBottom: "1rem",
                height: "12rem",
                borderRadius: " 2rem",
              }}>
              <Card.Body>
                <Card.Title>{post.titleVal}</Card.Title>
                <Card.Text>
                  {post.TxtVal.length <= 100
                    ? post.TxtVal
                    : post.TxtVal.substring(0, 100) + "..."} {" "}
                  <Link
                    to={`/blog/${post.id}`}
                    className="link-body-emphasis link-offset-3 link-underline-opacity-50 link-underline-opacity-100-hover">
                    Devamını Oku
                  </Link>
                </Card.Text>
                <Card.Footer style={{ marginBottom: "1%" }}>
                  {new Date(post.timestamp?.toDate()).toLocaleString()}
                </Card.Footer>
              </Card.Body>
            </Card>
          ))
        )}
      </Row>
    </Container>
  );
};

export default ThirdCard;
