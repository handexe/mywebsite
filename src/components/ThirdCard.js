import React, { useEffect, useState } from "react";
import { Container, Row, Card } from "react-bootstrap";
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from "react-router-dom";

const ThirdCard = () => {
  const [data, setData] = useState([]);

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
