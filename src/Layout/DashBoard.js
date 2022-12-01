import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import SideNav from '../Pages/SideNav/SideNav/SideNav';

const DashBoard = () => {
    return (
        <div>
            <Container>
                <div className="col">
                    <SideNav></SideNav>
                </div>
                <div className="col">
                    <Outlet></Outlet>
                </div>
            </Container>
        </div>
    );
};

export default DashBoard;