import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Books from './Books';

const AllBooks = () => {

    const allBooks = useLoaderData();
     
    // const [ allBooks, setAllBooks] = useState([]);

    // useEffect(() => {
    //     fetch(`http://localhost:5000/allbooks/${props.id}`)
    //     .then(res => res.json())
    //     .then(data => setAllBooks(data))
    // }, [])
        // const [ allBooks, setAllBooks] = useState(null);
      
        // useEffect(() => {
        //   const getData = async () => {
        //     const response = await fetch(`http://localhost:5000/allbooks/${props.id}`);
        //     const newData = await response.json();
        //     setAllBooks(newData);
        //   };
        //   getData();
        // }, [props.id]); 
        

    
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