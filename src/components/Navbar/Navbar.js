import {useLocation, useNavigate} from "react-router-dom";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtnLink,
} from '../styles/NavbarStyles';
import {Button} from "../styles/ButtonStyles";
import {LogoStyle} from "../styles/ImageStyles";
import Logo from "../../Images/boredviser_logo.svg"
import {useAuth} from "../../Context/Authcontext";

const Navbar = () => {
  const location = useLocation();
  console.log(location.pathname);


  function Verify()
  {
    window.sessionStorage.getItem('userLogged')

    if (window.sessionStorage.getItem('userLogged') != null)
      return true
    else return false
  }

  const V = Verify()


  const navigate = useNavigate()

  const {logout} = useAuth()

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

                {V === true && <NavItem>
                  <NavLinks to="/Profile">
                    Profile
                  </NavLinks>
                </NavItem>}

                {V === true && <NavItem>
                  <NavLinks to={'/Preferences/' + window.sessionStorage.getItem('userLogged')}>
                    Preferences
                  </NavLinks>
                </NavItem>}

                {V === false && location.pathname !== '/LogIn' && <NavBtnLink to="LogIn">
                  <Button>SIGN UP</Button>
                </NavBtnLink>}

                {V === true && <Button onClick={async e => {e.preventDefault(); logout(); alert('Logged Out'); window.sessionStorage.clear(); navigate('/LogIn')}}>LOG OUT</Button>}

              </NavMenu>

            </NavbarContainer>
          </Nav>
        </div>
    )
}

export default Navbar;
