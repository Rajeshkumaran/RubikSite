import { Container, Nav, Navbar } from 'react-bootstrap';
import React, { Component } from 'react';
import logo from '../../img/logo.png';
import './NavbarHeader.css';



export default class NavbarHeader extends Component {

    constructor() {
        super();
        this.state = {};
    }


    render() {
    

        return (
            <div className="navbar-div">
            <Navbar collapseOnSelect fixed='top' expand='sm'>
                <Navbar.Brand className="no-underline" href="/">
                    <img src={logo} alt="" width="300" height="80"/>
                </Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className="ml-auto">
                            <Nav.Link href='/'>Home</Nav.Link>
                            <Nav.Link href='/about-us'>About US</Nav.Link>
                            <Nav.Link href='/services'>Services</Nav.Link>
                            <Nav.Link href='/process'>Process</Nav.Link>
                            <Nav.Link href='/gallery'>Gallery</Nav.Link>
                            <Nav.Link href='/blogs'>Blogs</Nav.Link>
                            <Nav.Link className="no-underline" href='/estimate'>
                                <div className="estimate-btn">
                                Get Estimate
                                </div>
                            </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
            </div>
        );
    }

}

