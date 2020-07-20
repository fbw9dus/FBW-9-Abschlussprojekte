import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="md" fixed="top">
                <Navbar.Brand href="/" style={{fontWeight: 'bold', marginRight: '40px'}}>FBW-9</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/" className="link" >Home</Link>
                        <Link to="/nowaiter" className="link" >NoWaiter</Link>
                        <Link to="/tischtennis" className="link" >Tischtennis</Link>
                        <Link to="/restoGuide" className="link" >restoGuide</Link>
                        <Link to="/ddc" className="link" >DCI-Dev-Comm.</Link>
                        <Link to="/LapStore" className="link" >LapStore</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header
