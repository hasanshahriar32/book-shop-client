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
                <h3>{name}</h3>
                <h5>Product Price: {original_price}</h5>
                <h5>Resell Price: {resale_price}</h5>
                <h6>Uses: {years_of_use}</h6>
                <BookingModal
                    books={books}                
                >
                </BookingModal>
            </Card.Body>
          </Card>
    );
};

export default Books;