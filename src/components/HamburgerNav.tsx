import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants";

type Props = {
  openMobileNav: boolean;
  setOpenMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
};

interface MobileNavProps {
  openMobileNav: boolean;
}

const HamburgerNav: React.FC<Props> = ({ openMobileNav, setOpenMobileNav }) => {
  return (
    <HamburgerIcon
      openMobileNav={openMobileNav}
      onClick={() => setOpenMobileNav(!openMobileNav)}
    >
      <div />
      <div />
      <div />
    </HamburgerIcon>
  );
};

export default HamburgerNav;

const HamburgerIcon = styled.button<MobileNavProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  @media (min-width: 800px) {
    display: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ openMobileNav }) =>
      openMobileNav ? COLORS.black : COLORS.white};
    border-radius: 1px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ openMobileNav }) =>
        openMobileNav ? "rotate(45deg)" : "rotate(0)"};
    }

    :nth-child(2) {
      opacity: ${({ openMobileNav }) => (openMobileNav ? "0" : "1")};
      transform: ${({ openMobileNav }) =>
        openMobileNav ? "translateX(-20px)" : "translateX(0)"};
    }

    :nth-child(3) {
      transform: ${({ openMobileNav }) =>
        openMobileNav ? "rotate(-45deg)" : "rotate(0)"};
    }
  }
`;
