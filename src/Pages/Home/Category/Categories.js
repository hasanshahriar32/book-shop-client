import React, { useEffect, useState } from 'react';
import Category from './Category';
import './Categories.css'
import { Container } from 'react-bootstrap';

const Categories = () => {

    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch(`https://book-shop-server.vercel.app/category/`)
      .then((res) => res.json())
      .then((data) => setCategory(data));
    }, [])

    return (
        <Container>
            <div className='category_container'>
            {
                category?.map(caty => <Category
                    key={caty._id}
                    caty={caty}
                ></Category>)
            }
        </div>
        </Container>
    );
};

export default Categories;