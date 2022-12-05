import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MainLogo from "./MainLogo";
import styled from "styled-components";

const NavBar = () => {
  const [navStyle, setNavStyle] = useState(false);

  const changeNavStyle = () => {
    if (window.scrollY >= 100) {
      setNavStyle(true);
    } else {
      setNavStyle(false);
    }
  };

  window.addEventListener("scroll", changeNavStyle);

  return (
    <Nav navStyle={navStyle}>
      <MainLogo />
      <LinkContainer>
        <NavigationLink to="/work">Work</NavigationLink>
        <NavigationLink to="/shop">Shop</NavigationLink>
        <NavigationLink to="/about">About</NavigationLink>
        <NavigationLink to="/contact">Contact</NavigationLink>
      </LinkContainer>
    </Nav>
  );
};

export default NavBar;

const Nav = styled.nav`
  /* overflow: hidden; */
  background-color: ${(props) =>
    props.navStyle ? "black" : "rgba(0, 0, 0, 0.5)"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  padding: ${(props) => (props.navStyle ? "8px 10%" : "30px 10%")};
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
  font-size: 25px;
  text-decoration: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: inline-block;
  position: relative;
  &:after {
    background-color: white;
    bottom: 0;
    content: "";
    height: 2px;
    left: 0;
    position: absolute;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
    width: 100%;
  }
  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  &.active:after {
    position: relative;
    display: inline-block;
    background-color: white;
    bottom: 0;
    content: "";
    height: 2px;
    left: 0;
    position: absolute;
    transform: scaleX(1);
    width: 100%;
  }
`;
