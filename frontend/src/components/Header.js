import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const Header = () => {

    return (
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" className="px-4">

        <LinkContainer className="mr-5" to="/">
          <Navbar.Brand><i className="fas fa-camera"></i> Album</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to="/" className="mr-5">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/samples" className="mr-5">
                <Nav.Link><i className="fas fa-paw"></i> Samples</Nav.Link>
              </LinkContainer>    

              <LinkContainer to="/myalbum" className="mr-5">
                <Nav.Link><i className="fas fa-heart"></i> My Album</Nav.Link>
              </LinkContainer>   

              <LinkContainer to="/fileupload">
                <Nav.Link><i className="fas fa-plus"></i> Add New Image</Nav.Link>
              </LinkContainer>  
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    )
}

export default Header
