import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants";

type Props = {
  name: string;
  action?: () => any;
  disabled: boolean;
};

const Button: React.FC<Props> = ({ name, action, disabled }) => {
  return (
    <StyledBtn onClick={action} disabled={disabled}>
      {name}
    </StyledBtn>
  );
};

export default Button;

const StyledBtn = styled.button`
  display: block;
  width: 200px;
  height: 40px;
  line-height: 38px;
  font-family: korolev-compressed, sans-serif;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  color: ${COLORS.black};
  background-color: ${COLORS.white};
  border: 2px solid ${COLORS.black};
  letter-spacing: 2px;
  text-align: center;
  justify-content: center;
  position: relative;
  transition: all 0.35s;
  cursor: pointer;
  z-index: 1;
  &:after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: ${COLORS.black};
    transition: all 0.35s;
    color: ${COLORS.white};
    z-index: -1;
  }
  &:hover {
    color: ${COLORS.white};
  }
  &:hover:after {
    width: 100%;
  }
`;
