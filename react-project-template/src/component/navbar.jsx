import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'
import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'

const Tabs = () => {

  return ( <>
    
    <Navbar style={{ height:'50px'}}variant={'dark'} bg='dark' expand="md">
  <Container>
    <Navbar.Brand style={{fontSize:'15px',marginRight:'40px'}}> <li style={{color:'red'}}className="fa fa-infinity"></li> React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav style={{fontSize:'12px'}} className="me-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/App">App</Nav.Link>
        <Nav.Link as={Link} to="/Code">Code</Nav.Link>
        <Nav.Link as={Link} to="/Git">Git Repo</Nav.Link>
        <Nav.Link as={Link} to="/About">About</Nav.Link>

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    
  </> );
}
 
export default Tabs;
