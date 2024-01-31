import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <Navbar className="bg-success">
        <Link to={'/'} style={{textDecoration:"none"}}>
        <Container>
          <Navbar.Brand href="#home" className='text-light'>
          <i class="fa-brands fa-stack-overflow me-3"></i>
          Project Fair
          </Navbar.Brand>
        </Container>
        </Link>
      </Navbar>
    </>
  )
}

export default Header;