import React from 'react';
import './/Navs.css';
import { Container ,Nav,Navbar} from 'react-bootstrap';
 
const Navs = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#logo">GUSTO RESTURANT</Navbar.Brand>
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
      <Navbar.Collapse  >
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About Us</Nav.Link>
          <Nav.Link href="#explore">ExploreFoods</Nav.Link>
          <Nav.Link href="#review">Review</Nav.Link>
          <Nav.Link href="#faq">FAQ</Nav.Link>
          <Nav>
            <Nav.Link className='no' >11011023</Nav.Link>
           
          </Nav>
          
        
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navs
