import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { UseSelector, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const NavBar = () => {
 

   const pp= useSelector(state=>state.Cart)
   const navigate=useNavigate()

   const moveToCart=()=>{
    navigate("/cart")
   }

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#">Redux Toolkit</Navbar.Brand>
                <Nav>
                    <Nav.Link to="/" as={Link} >Products</Nav.Link>
                </Nav>
                <Navbar.Toggle />
                <Navbar.Collapse className='justify-content-end'>
                        <Navbar.Text>
                        <Nav.Link onClick={()=>moveToCart()} >Cart  {pp.length}</Nav.Link>
                        </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
