import React from 'react';
import { Card } from 'react-bootstrap';

const Reported = ({repot}) => {
    const {img_url , name} =repot
    return (
        <Card >
      <Card.Img variant="top" src={img_url} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
    </Card>
    );
};

export default Reported;