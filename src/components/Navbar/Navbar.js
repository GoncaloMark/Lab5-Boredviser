import {Link, Route, Routes, useLocation} from "react-router-dom";
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
import Register from "../Paginas/Register";
import LandingPage from "../Paginas/LandingPage";


const Navbar = () => {
  const location = useLocation();
  console.log(location.pathname);

  if (location.pathname === "/Register")
  {
    return (
        <div>
          <Nav>
            <NavbarContainer>

              <NavLogo to='/'><LogoStyle src={Logo}/></NavLogo>

              <NavMenu>

                <NavItem>
                  <NavLinks to="/">
                    Home
                  </NavLinks>
                </NavItem>

              </NavMenu>

            </NavbarContainer>
          </Nav>
        </div>
    );
  } else {
    return (
        <div>
          <Nav>
            <NavbarContainer>

              <NavLogo to='/'><LogoStyle src={Logo}/></NavLogo>

              <NavMenu>

                <NavItem>
                  <NavLinks to="/">
                    Home
                  </NavLinks>
                </NavItem>

                <NavBtnLink to='/Register'>
                  <Button>SIGN UP</Button>
                </NavBtnLink>

              </NavMenu>

            </NavbarContainer>
          </Nav>
        </div>
    );
  }
}

export default Navbar;
