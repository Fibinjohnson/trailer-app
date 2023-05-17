import React from 'react'
import "./Navbar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';






function Navbars() {
  return (

    <div className='navbar'>
       
      
       <Navbar variant="dark">
       <Container fluid>
        <Navbar.Brand href="#"><a>  <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png' alt="" /></a></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
             <Nav.Link  href="#action2"> Home</Nav.Link>
            <Nav.Link className='movies' href="#movies">Movies</Nav.Link>
            <Nav.Link href="#action">My List</Nav.Link>
            <Nav.Link href="#series">Tv shows</Nav.Link>
         
            
          </Nav>
         
           
        <img   className='avatar' src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png'  alt="" />
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
     </div>
    
  )
}

export default Navbars
