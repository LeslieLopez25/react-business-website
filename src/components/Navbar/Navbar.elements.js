import styled from "styled-components";
import { FaFire } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Container } from "../../globalStyles";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background: hsl(247.5, 80%, 3.9%);
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  height: 5rem;
  z-index: 999;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 5rem;
  ${Container}
`;

export const NavLogo = styled(Link)`
  color: hsl(0, 0%, 100%);
  display: flex;
  justify-self: flex-start;
  align-items: center;
  font-size: 2rem;
  text-decoration: none;
  cursor: pointer;
`;

export const NavIcon = styled(FaFire)`
  margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 60em) {
    display: block;
    font-size: 1.8rem;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  list-style: none;

  @media screen and (max-width: 60em) {
    display: flex;
    flex-direction: column;
    background: hsl(247.5, 80%, 3.9%);
    position: absolute;
    top: 5rem;
    left: ${({ click }) => (click ? 0 : "-100%")};
    width: 100%;
    height: 35.15625em;
    opacity: 1;
    transition: all 0.5s ease;
  }
`;

export const NavItem = styled.li`
  height: 5rem;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid hsl(300, 100%, 27.3%);
  }

  @media screen and (max-width: 60em) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled(Link)`
  display: flex;
  align-items: center;
  color: hsl(0, 0%, 100%);
  padding: 0.5rem 1rem;
  text-decoration: none;
  height: 100%;

  @media screen and (max-width: 60em) {
    display: table;
    text-align: center;
    padding: 2rem;
    width: 100%;

    &:hover {
      color: hsl(300, 100%, 27.3%);
      transition: all 0.3s ease;
    }
  }
`;

export const NavItemBtn = styled.li`
  @media screen and (max-width: 60em) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 7.5rem;
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
`;
