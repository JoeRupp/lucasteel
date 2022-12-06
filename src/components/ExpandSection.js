import React from "react";
import styled from "styled-components";

const ExpandSection = ({ title, description, image }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};

export default ExpandSection;

const Container = styled.div`
  background-color: rgb(220, 219, 219);
  width: 100%;
  height: 250px;
`;

const Title = styled.h3`
  color: black;
`;

const Description = styled.p``;
