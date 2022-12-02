import React from 'react';
import { Card, Container } from 'react-bootstrap';

const Advertze = ({addvert}) => {

    console.log(addvert);
    const {_id, name, location, original_price, resale_price, seller_name, years_of_use, img_url } = addvert;

    return (
        <Container>
            <div >
            
            <div>
            <Card >
            <Card.Img className='img_container' variant="top" src={img_url} />
            <Card.Body>
                <h2>{name}</h2>
                <h6>Product Price: $ {original_price}</h6>
                <h4>Resell Price: $ {resale_price}</h4>
                <h6>Uses: {years_of_use} years</h6>
            </Card.Body>
          </Card>
            </div>
            </div>
        </Container>
    );
};

export default Advertze;