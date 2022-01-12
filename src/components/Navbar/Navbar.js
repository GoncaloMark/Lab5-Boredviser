import React from 'react'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtnLink
} from '../styles/NavbarStyles';
import {Button} from "../styles/ButtonStyles";


const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>BoredviserLogo</NavLogo>

          <NavMenu>
            <NavItem>
              <NavLinks to='/'>
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/'>
                Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/'>
                Products
              </NavLinks>
            </NavItem>

            <NavBtnLink to='/'>
              <Button>SIGN UP</Button>
            </NavBtnLink>

          </NavMenu>

        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
