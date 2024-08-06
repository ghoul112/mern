import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Navbarr() {
  return (
    <div> 
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">User app</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
            <Nav.Link href="#features"><Link to="/contact">Contact</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link to="/about">About</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  </div>
  )
}

export default Navbarr