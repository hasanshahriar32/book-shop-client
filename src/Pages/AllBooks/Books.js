import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import BookingModal from '../BookingModal/BookingModal';

const Books = ({books}) => {
    const { name, location, original_price, resale_price, seller_name, years_of_use, img_url, category_id } = books;
    return (
        <Card >
            <Card.Img className='img_container' variant="top" src={img_url} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <BookingModal
                    books={books}                
                >
                </BookingModal>
            </Card.Body>
          </Card>
    );
};

export default Books;