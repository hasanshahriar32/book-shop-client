import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Context/UserContext';
import './Login.css';
import Loader from '../Utilities/Loader/Loader';

const Login = () => {

    let title = "Book Shop -Login";
    document.title = title;
    const {signIn, providerLogin,loading} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/'
    if(loading){
        return <Loader></Loader>
    }


    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            navigate(from, {replace: true})
        })
        .catch(error => console.error(error));
    }
    
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
        .then(result => {
            const user = result.user
            console.log(user)
        })
        .catch(error => console.error(error))
    }
    const githubProvider = new GithubAuthProvider();
    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
        .then(result => {
            const user = result.user
            console.log(user)
        })
        .catch(error => console.error(error))
    }
    return (
        <div>
            <div className=' mx-auto login-container'>
            <h3 className='text'>Please Login Now!</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required/>
                </Form.Group>
                <button className='login'>Login</button>
                <p className='text-white mt-3'>New to Book Shop <Link to='/register'> Create a New Account</Link></p>
                <div className='d-flex justify-content-around align-items-center'>
                    <h4 className='log-text'>Or login with</h4>
                    <span>
                        <button onClick={handleGoogleSignIn} className='icon'><FaGoogle></FaGoogle></button>
                        <button onClick={handleGithubSignIn} className='icon'><FaGithub></FaGithub></button>
                    </span>
                    <span></span>
                </div>
            </Form>
        </div>
        </div>
    );
};

export default Login;