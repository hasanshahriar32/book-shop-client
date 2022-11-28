import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Books = ({books}) => {
    console.log(books)
    const { name, original_price, img_url, category_id } = books;
    return (
        <Card >
            <Card.Img className='img_container' variant="top" src={img_url} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Link><Button variant="primary">Go somewhere</Button></Link>
            </Card.Body>
          </Card>
    );
};

export default Books;