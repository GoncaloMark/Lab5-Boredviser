import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const Nav = styled.nav`
background-color: ${({ theme }) => theme.colors.header};
height: 80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;
`

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
`

export const NavLogo = styled(Link)`
color: #64DFDF;
justify-self: flex-start;
cursor: pointer;
font-size: 1.5rem;
display: flex;
align-items: center;
margin-left: 24px;
font-weight: bold;
text-decoration: none;
`


export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;
  margin-right: 1rem;

  &:hover {
    border-bottom: 2px solid #038c8c;
  }
`;


export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: 600;
  padding: 0.5rem 1rem 0;
  height: 100%;


  &:hover {
    color: #038c8c;
    transition: all 0.3s ease;
  }

`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;
