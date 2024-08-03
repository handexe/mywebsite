import React from 'react'
import { Card, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import './Components.css';

function SecondCard() {
  return (
    <Card id="second-card">
      <Card.Body>
        <Card.Title>Projelerim</Card.Title>
        <Card.Text>
          Bir Bilgisayar Programcısı olarak yaptığım tüm projelerime buradan ulaşabilirsiniz. 
        </Card.Text>
        <Link to="https://github.com/handexg">
          <Button variant="secondary">Git Hub</Button>
        </Link>
        
      </Card.Body>
    </Card>
  )
}

export default SecondCard
