import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../constants";

type Props = {
  openMobileNav: boolean;
  setOpenMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
};

interface MobileNavProps {
  openMobileNav: boolean;
}

const MobileNav: React.FC<Props> = ({ openMobileNav, setOpenMobileNav }) => {
  return (
    <MobileNavContainer openMobileNav={openMobileNav}>
      <NavigationLink
        to="/"
        end
        onClick={() => setOpenMobileNav(!openMobileNav)}
      >
        Home
      </NavigationLink>
      <NavigationLink
        to="/work"
        onClick={() => setOpenMobileNav(!openMobileNav)}
      >
        Work
      </NavigationLink>
      <ExternalLink
        href="https://www.etsy.com/shop/LucaSteel?listing_id=1170224592&ref=simple-shop-header-name"
        target="_blank"
        rel="noopener noreferrer"
      >
        Shop
      </ExternalLink>
      <NavigationLink
        to="/about"
        onClick={() => setOpenMobileNav(!openMobileNav)}
      >
        About
      </NavigationLink>
      <NavigationLink
        to="/contact"
        onClick={() => setOpenMobileNav(!openMobileNav)}
      >
        Contact
      </NavigationLink>
    </MobileNavContainer>
  );
};

export default MobileNav;

const MobileNavContainer = styled.nav<MobileNavProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${COLORS.white};
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  width: 85%;
  transform: ${({ openMobileNav }) =>
    openMobileNav ? "translateX(0)" : "translateX(100%)"};

  @media (min-width: 800px) {
    display: none;
  }
`;

const NavigationLink = styled(NavLink)`
  width: 30vw;
  color: ${COLORS.black};
  font-size: 2.5rem;
  margin: 2rem 0;
  text-decoration: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: inline-block;
  position: relative;
  text-align: center;
  &:after {
    background-color: ${COLORS.black};
    bottom: 0;
    content: "";
    height: 3px;
    left: 0;
    position: absolute;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
    width: 100%;
  }
  &.active:after {
    position: relative;
    display: inline-block;
    background-color: ${COLORS.black};
    bottom: 0;
    content: "";
    height: 3px;
    left: 0;
    position: absolute;
    transform: scaleX(1);
    width: 100%;
  }
`;

const ExternalLink = styled.a`
  width: 30vw;
  color: ${COLORS.black};
  font-size: 2.5rem;
  margin: 2rem 0;
  text-decoration: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: inline-block;
  position: relative;
  text-align: center;
  &:after {
    background-color: ${COLORS.black};
    bottom: 0;
    content: "";
    height: 3px;
    left: 0;
    position: absolute;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
    width: 100%;
  }
  &.active:after {
    position: relative;
    display: inline-block;
    background-color: ${COLORS.black};
    bottom: 0;
    content: "";
    height: 3px;
    left: 0;
    position: absolute;
    transform: scaleX(1);
    width: 100%;
  }
`;
