import React from 'react'
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  userEmail: PropTypes.string.isRequired,
  allowedEmail: PropTypes.arrayOf(PropTypes.string).isRequired,
};
function ExampleBlogTextCard({ id, title, description }) {
    // const truncateText = (text, limit) => {
    //     if (text.length <= limit) return text;
    //     return text.substring(0, limit) + '...';
    //   };
  return (
    <Card style={{ width: '40rem', margin: '1rem', height:'15rem' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {(limit )=>{
            if (description.length <= limit) return description;
            return description.substring(0, limit) + '...';
          }}
        </Card.Text>
        <Button variant="secondary" as={Link} to={`/post/${id}`}>
          Devamını Oku
        </Button>
      </Card.Body>
    </Card>
  )
}

export default ExampleBlogTextCard
