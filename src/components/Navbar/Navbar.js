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
import {logout} from "../../Firebase/Firebase";

export function useVerify(x='')
{
  window.sessionStorage.getItem(x)

  if (window.sessionStorage.getItem(x) != null)
    return true
  else return false
}

export function useGetStorage(x='')
{
  return window.sessionStorage.getItem(x)
}

const Navbar = () => {
  const location = useLocation();
  console.log(location.pathname);

  const V = useVerify('userLogged')


  const navigate = useNavigate()

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
