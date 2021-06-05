import React from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
import {MdShoppingCart} from 'react-icons/md'
import logo from "../../assets/logo.png"
import './style.css'
const NavigationBar = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
            <img class = "logo" src={logo} alt="logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Products</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
          <MdShoppingCart class="icon" size="40"/>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default NavigationBar;