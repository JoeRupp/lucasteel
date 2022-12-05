import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MainLogo from "./MainLogo";
import styled from "styled-components";

const NavBar = () => {
  const [navSize, setNavSize] = useState(false);

  const changeNavSize = () => {
    if (window.scrollY >= 90) {
      setNavSize(true);
    } else {
      setNavSize(false);
    }
  };

  window.addEventListener("scroll", changeNavSize);

  return (
    <Nav navSize={navSize}>
      <MainLogo />
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
  /* overflow: hidden; */
  background-color: ${(props) =>
    props.navSize ? "black" : "rgba(0, 0, 0, 0.3)"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  padding: ${(props) => (props.navSize ? "8px 10%" : "30px 10%")};
  transition: 0.4s;
  height: 10vh;
  position: fixed;
  z-index: 99;
`;

const LinkContainer = styled.div`
  display: flex;
  width: 30%;
  justify-content: space-between;
`;

const NavigationLink = styled(NavLink)`
  color: white;
  text-decoration: none;
`;
