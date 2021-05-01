import { Nav, Navbar } from 'react-bootstrap';
import React, { Component } from 'react';
import logo from '../../img/logo.png';
import './NavbarHeader.css';
import { Link } from 'react-router-dom';

export default class NavbarHeader extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="navbar-div">
        <Navbar collapseOnSelect fixed="top" expand="sm">
          <Navbar.Brand className="no-underline" href="/">
            <img src={logo} alt="" width="300" height="80" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/about-us" className="nav-link">
                About US
              </Link>
              <Link to="/services" className="nav-link">
                Services
              </Link>
              <Link to="/process" className="nav-link">
                Process
              </Link>
              <Link to="/gallery" className="nav-link">
                Gallery
              </Link>
              <Link to="/blogs" className="nav-link">
                Blogs
              </Link>
              <Link className="nav-link no-underline" to="/estimate">
                <div className="estimate-btn">Get Estimate</div>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
