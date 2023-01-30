import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants";

const HamburgerNav = () => {
  return (
    <HamburgerIcon>
      <BurgerPart />
      <BurgerPart />
      <BurgerPart />
    </HamburgerIcon>
  );
};

export default HamburgerNav;

const HamburgerIcon = styled.button`
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
`;

const BurgerPart = styled.div`
  width: 2rem;
  height: 0.25rem;
  background: ${COLORS.white};
  border-radius: 10px;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;
`;
