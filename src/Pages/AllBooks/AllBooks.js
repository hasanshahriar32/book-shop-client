import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Books from './Books';

const AllBooks = () => {

    const allBooks = useLoaderData();
    
    return (
        <Container>
            <div className='category_container'>
            {
                allBooks?.map(books => <Books
                    key={books._id}
                    books={books}
                ></Books>)
            }
        </div>
        
        </Container>
    );
};

export default AllBooks;