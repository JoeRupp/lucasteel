import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import fbIcon from "../assets/logos/social_icons/fbIcon.png";
import instaIcon from "../assets/logos/social_icons/InstaIcon.png";
import { COLORS } from "../constants";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterDirectory>
        <NavigationLink to="/">Home</NavigationLink>
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
      </FooterDirectory>
      <SocialContainer>
        <FacebookIcon
          href="https://www.facebook.com/LucaSteelandFabrication/"
          target="_blank"
          rel="noopener noreferrer"
        />
        <InstagramIcon
          href="https://www.instagram.com/lucas_steel_/"
          target="_blank"
          rel="noopener noreferrer"
        />
      </SocialContainer>
      <FooterCopyRight>
        Copyright © 2023 LucaSteel Welding & Fabrication All Rights Reserved.
      </FooterCopyRight>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  background-color: ${COLORS.white};
  padding: 8% 10% 2% 10%;
  height: 150px;
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1em;
`;

const FooterDirectory = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;

const NavigationLink = styled(NavLink)`
  cursor: pointer;
  color: ${COLORS.black};
  font-size: 1.1rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const ExternalLink = styled.a`
  cursor: pointer;
  color: ${COLORS.black};
  font-size: 1.1rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 2em;
`;

const InstagramIcon = styled.a`
  background-image: url(${instaIcon});
  background-size: contain;
  cursor: pointer;
  width: 35px;
  height: 35px;
`;

const FacebookIcon = styled.a`
  background-image: url(${fbIcon});
  background-size: contain;
  cursor: pointer;
  width: 35px;
  height: 35px;
`;

const FooterCopyRight = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: small;
`;
