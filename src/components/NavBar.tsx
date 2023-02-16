import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import MainLogo from "./MainLogo";
import styled from "styled-components";
import { COLORS } from "../constants";
import HamburgerNav from "./HamburgerNav";
import MobileNav from "./MobileNav";
import { useClickOutside } from "../hooks/useClickOutside";

interface NavStylingProps {
  navStyle: boolean;
}

const NavBar: React.FC = () => {
  const node = useRef<HTMLDivElement>(null);

  const [navStyle, setNavStyle] = useState<boolean>(false);
  const [openMobileNav, setOpenMobileNav] = useState<boolean>(false);

  useClickOutside(node, () => setOpenMobileNav(false));

  const changeNavStyle = (): void => {
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
      <MobileNavContainer ref={node}>
        <HamburgerNav
          openMobileNav={openMobileNav}
          setOpenMobileNav={setOpenMobileNav}
        />
        <MobileNav openMobileNav={openMobileNav} />
      </MobileNavContainer>
      <LinkContainer>
        <NavigationLink to="/work">Work</NavigationLink>
        <ExternalLink
          href="https://www.etsy.com/shop/LucaSteel?listing_id=1170224592&ref=simple-shop-header-name"
          target="_blank"
          rel="noopener noreferrer"
        >
          Shop
        </ExternalLink>
        <NavigationLink to="/about">About</NavigationLink>
        <NavigationLink to="/contact">Contact</NavigationLink>
      </LinkContainer>
    </Nav>
  );
};

export default NavBar;

const Nav = styled.nav<NavStylingProps>`
  background-color: ${(props) =>
    props.navStyle ? COLORS.black : "rgba(0, 0, 0, 0.5)"};
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

const MobileNavContainer = styled.div``;

const LinkContainer = styled.div`
  display: flex;
  width: 30%;
  justify-content: space-between;
  @media (max-width: 1080px) {
    width: 50%;
  }
  @media (max-width: 800px) {
    display: none;
  }
`;

const NavigationLink = styled(NavLink)`
  color: ${COLORS.white};
  font-size: 1.5rem;
  text-decoration: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: inline-block;
  position: relative;
  &:after {
    background-color: ${COLORS.white};
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
    background-color: ${COLORS.white};
    bottom: 0;
    content: "";
    height: 2px;
    left: 0;
    position: absolute;
    transform: scaleX(1);
    width: 100%;
  }
`;

const ExternalLink = styled.a`
  color: ${COLORS.white};
  font-size: 1.5rem;
  text-decoration: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: inline-block;
  position: relative;
  &:after {
    background-color: ${COLORS.white};
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
    background-color: ${COLORS.white};
    bottom: 0;
    content: "";
    height: 2px;
    left: 0;
    position: absolute;
    transform: scaleX(1);
    width: 100%;
  }
`;
