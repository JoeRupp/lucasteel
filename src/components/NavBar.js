import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
  return (
    <Nav>
      <h1>LucaSteel</h1>
      <LinkContainer>
        <NavigationLink to="/" onClick={() => console.log("home")}>
          Home
        </NavigationLink>
        <NavigationLink to="/contact" onClick={() => console.log("contact")}>
          Contact
        </NavigationLink>
        <NavigationLink to="/work" onClick={() => console.log("work")}>
          Work
        </NavigationLink>
      </LinkContainer>
    </Nav>
  );
};

export default NavBar;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 25%;
  width: 100%;
`;

const LinkContainer = styled.div`
  height: 25%;
  width: 100%;
`;

const NavigationLink = styled(NavLink)`
  color: black;
`;
