import React, { useEffect, useState } from "react";
import { Container, Card , Col , Row , Placeholder } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { getDocs, collection, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import "./Pages.css";
function Blog({ isAuth }) {
  const [data, setData] = useState([]);

  // const fetchAllPosts = async () => {
  //   try {
  //     const response = await fetch('/api/get-all-posts');
  
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }
  
  //     const posts = await response.json();
  //     setData(posts); // Veriyi state'e kaydediyoruz
  //   } catch (error) {
  //     console.error('Error:', error);
  //     alert('An error occurred while fetching all posts.');
  //   }
  // };

  // useEffect(() => {
  //   fetchAllPosts();
  // }, []); // Dependecy array'e boş array ekleyerek sadece bileşen ilk yüklendiğinde çalışmasını sağlarız

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
      {data.length > 0 ? (
        <Container id="blog-posts-container">
          {data.map((post) => (
            <Card id="posts-blog" key={post.id}>
              <Card.Body>
                <Card.Title as="h5">{post.titleVal}</Card.Title>
                <Card.Text>{post.TxtVal.length <= 100
                    ? post.TxtVal
                    : post.TxtVal.substring(0, 100) + "..."} </Card.Text>
                <Link to={`/blog/${post.id}`}>Posta git</Link>
              </Card.Body>
            </Card>
          ))}
        </Container>
      ) : (
        <Container id="blog-posts-container">
        <Row>
            <Col>
              <Container className="p-4" id="posts-blog">
                <Placeholder as={Container} animation="glow">
                  <Placeholder xs={4} size="lg" />
                </Placeholder>
                <br />
                <Placeholder as="p" animation="glow">
                  <Placeholder xs={8} size="lg" />
                  <Placeholder xs={9} />
                </Placeholder>
              </Container>
            </Col>
          </Row>
          
        
        </Container>
      )}

      <Footer />
    </div>
  );
}

export default Blog;
