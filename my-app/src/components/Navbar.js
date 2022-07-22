
import React from 'react'
import './Navbar.css'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Container,Navbar } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

function Navbarr() {

  const navigate = useNavigate();

  return (
    <Navbar bg="dark" variant='dark'  expand="lg" collapseOnSelect>
 <Container>
   <Navbar.Brand href="/">pro shop</Navbar.Brand>
   <Navbar.Toggle aria-controls="basic-navbar-nav" />
   <Navbar.Collapse id="basic-navbar-nav">
     <Nav className="ms-auto">

     <Nav.Link onClick={()=>{
         navigate("/")
       }}> <HomeIcon className='icon'/> Home </Nav.Link>

       <Nav.Link onClick={()=>{
         navigate("/login")
       }}> <LockOpenIcon className='icon'/> Login</Nav.Link>

       <Nav.Link onClick={()=>{
         navigate("/signup")
       }}> <PersonAddIcon className='icon'/> Sign Up</Nav.Link>
      
     </Nav>
   </Navbar.Collapse>
   </Container>
</Navbar>
  )
}

export default Navbarr