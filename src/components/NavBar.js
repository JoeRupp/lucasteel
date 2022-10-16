import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
  return (
    <Nav>
      <Logo></Logo>
      <LinkContainer>
        <NavigationLink to="/work" onClick={() => console.log("work")}>
          Work
        </NavigationLink>
        <NavigationLink to="/shop" onClick={() => console.log("shop")}>
          Shop
        </NavigationLink>
        <NavigationLink to="/about" onClick={() => console.log("about")}>
          About
        </NavigationLink>
        <NavigationLink to="/contact" onClick={() => console.log("contact")}>
          Contact
        </NavigationLink>
      </LinkContainer>
    </Nav>
  );
};

export default NavBar;

const Nav = styled.nav`
  background-color: #333333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const LinkContainer = styled.div`
  display: flex;
  width: 30%;
  justify-content: space-between;
`;

const NavigationLink = styled(NavLink)`
  color: black;
`;

const Logo = styled.image``;
