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

  const navigate = useNavigate()

  const {currentUser, logout} = useAuth()

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

                {!currentUser && location.pathname !== '/LogIn' && <NavBtnLink to="LogIn">
                  <Button>SIGN UP</Button>
                </NavBtnLink>}

                {currentUser && <Button onClick={async e => {e.preventDefault(); logout(); alert('Logged Out'); navigate('/LogIn')}}>LOG OUT</Button>}

              </NavMenu>

            </NavbarContainer>
          </Nav>
        </div>
    )
}

export default Navbar;
