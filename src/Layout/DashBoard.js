import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import SideNav from '../Pages/SideNav/SideNav/SideNav';

const DashBoard = () => {
    return (
        <div>
            <Container>
                <Row>
                <div className="col-lg-3">
                    <SideNav></SideNav>
                </div>
                <div className="col-lg-9">
                    <Outlet></Outlet>
                </div>
                </Row>
            </Container>
        </div>
    );
};

export default DashBoard;