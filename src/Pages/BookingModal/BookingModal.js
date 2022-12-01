import React, { useContext, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import './BookingModal.css'
import { AuthContext } from '../../Context/UserContext';
import PrivateRoute from '../../Routes/PriveteRoute/PrivateRoute';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookingModal = ({books}) => {
    const { name,  resale_price } = books;
    const {user} = useContext(AuthContext)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    // const [book, setBook] = useState({})
    const time = new Date();
    const [currentTime, setcurrentTime] = useState(time);

    // const handleInputBlur = event => {
    //   const field = event.target.name;
    //   const value = event.target.value;
    //   let time = new Date();
    //   setcurrentTime(time);
    //   const newBook = {...book,currentTime};
    //   newBook[field] = value ;
    //   setBook(newBook)
    // }

    const handleAddUser = event =>{
      event.preventDefault();

      const from = event.target;
      const name = from.name.value;
      const userName = from.userName.value;
      const userEmail = from.userEmail.value;
      const price = from.price.value;
      const number = from.number.value;
      const address = from.address.value;


      const orders = {
        productName : name,
        userName : userName,
        userEmail : userEmail,
        price : price,
        number : number,
        address : address
        
      }
      console.log(orders)


      fetch('http://localhost:5000/orders', {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(orders)
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
          if(data.acknowledged){
              toast.success('Booking Confirmed')
              event.target.reset();
          }
      })
  }

  
    return (
        <>
          <button className='book_btn' onClick={handleShow}>
              Book Now
          </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Please Book is Here</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleAddUser}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" name="name" defaultValue={`Book: ${name}`} disabled  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" name="userName" defaultValue={user?.displayName} disabled  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="email" name="userEmail" defaultValue={user?.email} disabled />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" name="price"  defaultValue={`Price: ${resale_price}`} disabled/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" name="number" placeholder="Phone Number" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" name="address" placeholder="Address" />
      </Form.Group>
        <div className='text-center'>
        <button type='submit' className='text-center book_btn pe-5 ps-5 mx-aut0' onClick={handleClose}>
              Submit
          </button>
        </div>
        </Form>
        </Modal.Body>
      </Modal>
        </>
    );
};

export default BookingModal;