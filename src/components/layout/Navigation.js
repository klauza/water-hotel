import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Logo from '../../media/favicon.png';
import {connect} from 'react-redux';
import {pageLocation} from '../../actions/sortingActions';


const Wrapper = styled.div`
  width: 100%;
  background-color: grey;
`;
const Container = styled.div`
  width: 70%;
  height: 56px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto 1fr auto auto auto auto;
  align-items: center;
`;
const NavbarBrand = styled.div`
  color: red;
  height: 100%;
  display: flex; flex-direction: row;
  align-self: center;
  justify-self: center;
  a{
    display: grid;
    grid-template-columns: auto auto;
    height: 56px;
    align-items: center;
    color: white;
    text-decoration: none;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-transform: uppercase;
    img{
    margin: 0 5px;
    width: auto;
    height: 45px;
    object-fit: cover;
    display: inline-block;
  }
  }
`;
const Nav = styled.div`
  margin-left: auto;
  height: 100%;
  a{
    display: inline-block;
    line-height: 56px;
    padding: 0px 10px;
    color: black;
    text-decoration: none;
    &:hover{
      color: white;
    }
  }
`;

const Navigation = ({sort: {pageLocY}, pageLocation}) => {

  const setLocationToZero = () => {
    if(pageLocY === 0) return
    if(pageLocation(0));
  }
  return (
      <Wrapper>
       
          <Container>
            <NavbarBrand><Link onClick={setLocationToZero} to="/"><img src={Logo} alt="" />Bhutanotel</Link></NavbarBrand>
            {/* <NavbarToggle aria-controls="basic-navbar-bar" /> */}
            {/* <NavbarHamburger id="basic-navbar-nav"> */}
              <Nav>
                <Link onClick={setLocationToZero} to="/">Home </Link>
                <Link onClick={setLocationToZero} to="/hotel-list">Hotels </Link>
                <Link onClick={setLocationToZero} to="/contact">Contact</Link> 
                <Link onClick={setLocationToZero} to="/guides">Guides</Link> 
              </Nav>
            {/* </NavbarHamburger> */}
          </Container>

     
      </Wrapper>
    
  )
}

const mapStateToProps = state => ({
  sort: state.sort
})
export default connect(mapStateToProps, {pageLocation})(Navigation)
