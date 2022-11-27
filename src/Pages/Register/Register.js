import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import './Register.css'
import { AuthContext } from '../../Context/UserContext';


const Register = () => {
    let title = "Squid Food -Register";
    document.title = title;
    const [error, setError] = useState(null);
    const {createUser} = useContext(AuthContext)

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value
        const email = form.email.value;
        const password = form.password.value;
        if(password.length < 6){
            setError('Password should be a characters or more.');
            return;
        }
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
        })
        
    }
    return (
        <div className=' mx-auto login-container'>
            <h3 className='text'>Please Register Now!</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter name" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required/>
                </Form.Group>
                <button className='login'>Register</button>
                <p className='text-white mt-3'>Already, have an account <Link to='/login'> Login</Link></p>
                <p className='text-error'>{error}</p>
            </Form>
        </div>
    );
};

export default Register;