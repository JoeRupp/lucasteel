import React from "react";
import styled from "styled-components";

const Button = ({ name, action, type, disabled }) => {
  return (
    <StyledBtn onClick={action} type={type} disabled={disabled}>
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
  color: black;
  background-color: white;
  border: 2px solid black;
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
    background-color: black;
    transition: all 0.35s;
    color: white;
    z-index: -1;
  }
  &:hover {
    color: white;
  }
  &:hover:after {
    width: 100%;
  }
`;
