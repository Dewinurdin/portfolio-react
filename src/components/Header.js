import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProfileImage = styled.img`
  width: 15em;
  height: 12em;
  border-radius: 50%;
`;

const ProfileTitle = styled.h1`
  color: black;
`;

const HeaderDiv = styled.div`
  text-align: center;
  font-family: 'Zilla Slab Highlight', sans-serif;
  color: black;
  background: white;
`;

const NavLink = styled(Link)`
  display: inline-flex;
  margin: 0 5px;
  color: black;
  font-size: 16px;
`

class Header extends Component {
  render() {
    return (
      <HeaderDiv>
        <Link to="/"> 
          <ProfileImage src={process.env.PUBLIC_URL + '/assets/me.jpg'} alt='Dewi Nurdin'/>
          <ProfileTitle>Hi! I'm Dewi Nurdin</ProfileTitle>
        </Link>
            <div>
                <NavLink to='/'>ABOUT</NavLink>
                <NavLink to='/code'>PROJECT DEMOS</NavLink>
                {/* <NavLink to='/parallax'>CODES</NavLink> */}
                <NavLink to='/contact'>CONTACT</NavLink>
                
            </div>
            <hr />
       
      </HeaderDiv>
    );
  }
}

export default Header;