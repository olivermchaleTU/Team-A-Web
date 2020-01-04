import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from "react-router-bootstrap";

class TeamANavBar extends React.Component {
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                <LinkContainer to="/">
                <Navbar.Brand>Team A</Navbar.Brand>
                </LinkContainer>
                    <Nav className="mr-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/users">
                            <Nav.Link>Users</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/products">
                            <Nav.Link >Products</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/purchaseorders">
                            <Nav.Link >Purchase Orders</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar>
            </>
        )
    }

    
}



export default TeamANavBar;