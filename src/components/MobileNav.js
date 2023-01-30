import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../constants";

const MobileNav = () => {
  return (
    <MobileNavContainer>
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
    </MobileNavContainer>
  );
};

export default MobileNav;

const MobileNavContainer = styled.nav`
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
  width: 100%;
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
    height: 2px;
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
    height: 2px;
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
    height: 2px;
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
    height: 2px;
    left: 0;
    position: absolute;
    transform: scaleX(1);
    width: 100%;
  }
`;
