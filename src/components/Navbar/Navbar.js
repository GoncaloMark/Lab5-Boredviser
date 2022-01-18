import {useLocation} from "react-router-dom";
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
import {LogOut} from "../Paginas/Register";

const Navbar = () => {
  const location = useLocation();
  console.log(location.pathname);

  if (location.pathname === "/LogIn")
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
  } else if(location.pathname === "/"){
    return(
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

                <NavBtnLink to="/LogIn">
                  <Button>SIGN UP</Button>
                </NavBtnLink>

              </NavMenu>

            </NavbarContainer>
          </Nav>
        </div>
    )

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

            <NavBtnLink to="/">
              <Button onClick={LogOut}>LOG OUT</Button>
            </NavBtnLink>

          </NavMenu>

        </NavbarContainer>
      </Nav>
    </div>
    );
  }
}

export default Navbar;
