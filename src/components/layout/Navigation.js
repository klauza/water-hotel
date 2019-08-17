import React from 'react';
import styled from 'styled-components';
import { LinkContainer } from "react-router-bootstrap";
import {Link} from 'react-router-dom';
import {Nav, Navbar} from 'react-bootstrap';
import {Container} from 'react-bootstrap';

const Styles = styled.div`
  .navbar{
    width: 100%;
    background-color: grey;
  }
  .nav-item{
    color: #bbb;
    margin: 0 10px;
    &:hover{
      cursor: pointer;
      color: white;
    }
  }
`;

const Navigation = () => {
  return (
    
      <Styles>
        <Navbar expand="lg">

          <Container>
            <Navbar.Brand><Link to="/">Home</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-bar" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <LinkContainer to="/"><Nav.Item>Home </Nav.Item></LinkContainer>
                <LinkContainer to="/hotel-list"><Nav.Item>Hotels </Nav.Item></LinkContainer>
                <LinkContainer to="/contact"><Nav.Item>Contact</Nav.Item></LinkContainer> 
                <LinkContainer to="/guides"><Nav.Item>Guides</Nav.Item></LinkContainer> 
              </Nav>
            </Navbar.Collapse>
          </Container>

        </Navbar>
      </Styles>
    
  )
}

export default Navigation
