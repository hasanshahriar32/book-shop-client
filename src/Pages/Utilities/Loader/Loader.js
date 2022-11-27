import React from 'react';
import './Loader.css'
import { Container } from "react-bootstrap";
import { BallTriangle } from "react-loader-spinner";

const Loader = () => {
    return (
        <div>
            <Container className="loader">
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </Container>
        </div>
    );
};

export default Loader;