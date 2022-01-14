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
import {LogoStyle} from "../styles/ImageStyles";
import Logo from "../../Images/boredviser_logo.svg"


const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'><LogoStyle src={Logo}/></NavLogo>

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
