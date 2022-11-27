import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Category = ({caty}) => {
    console.log(caty)
    const {name, img} = caty;
    
    return (
          <Card >
            <Card.Img className='img_container' variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
    );
};

export default Category;