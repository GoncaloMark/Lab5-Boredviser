import { useLocation, useNavigate } from "react-router-dom";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtnLink,
} from '../styles/NavbarStyles';
import { Button } from "../styles/ButtonStyles";
import { LogoStyle } from "../styles/ImageStyles";
import Logo from "../../Images/boredviser_logo.svg"
import { logout } from "../../Firebase/Firebase";
import MostraPerfil from "../MostraPerfil/MostraPerfil";
import React from "react";

export function useVerify(x = '') {
  window.sessionStorage.getItem(x)

  if (window.sessionStorage.getItem(x) != null)
    return true
  else return false
}

export function useVerifyLocal(x = '') {
  window.localStorage.getItem(x)
  console.log(localStorage)

  if (window.sessionStorage.getItem(x) != null)
    return true
  else return false
}

export function useGetStorage(x = '') {
  return window.sessionStorage.getItem(x)
}

const Navbar = () => {
  const location = useLocation();
  console.log(location.pathname);

  const V = useVerify('userLogged')

  const F = useVerifyLocal('User')


  const navigate = useNavigate()

  return (
    <div>
      <Nav>
        <NavbarContainer>

          <NavLogo to='/'><LogoStyle src={Logo} /></NavLogo>

          <NavMenu>

            <NavItem>
              <NavLinks to="/">
                Home
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="/AboutUs">
                About
              </NavLinks>
            </NavItem>

            {V === true && <NavItem>
              <NavLinks to="/Profile">
                Profile
              </NavLinks>
            </NavItem>}

            {V === true && <NavItem>
              <NavLinks to={'/Preferences/' + window.sessionStorage.getItem('userLogged')}>
                Activities
              </NavLinks>
            </NavItem>}

            {V === true && <NavItem>
              <NavLinks to={'/Quotes'}>
                Quotes
              </NavLinks>
            </NavItem>}


            {V === false && location.pathname !== '/LogIn' && <NavBtnLink to="LogIn">
              <Button>SIGN UP</Button>
            </NavBtnLink>}

            {V === true && <Button onClick={async e => { e.preventDefault(); logout(); alert('Logged Out'); window.sessionStorage.clear(); navigate('/LogIn') }}>LOG OUT</Button>}
            {/* {F === false && V === false && <div>
                <MostraPerfil/>
              </div>}*/}

          </NavMenu>

        </NavbarContainer>
      </Nav>
    </div>
  )
}

export default Navbar;
