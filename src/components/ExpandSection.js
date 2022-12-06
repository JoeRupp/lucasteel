import React from "react";
import styled from "styled-components";

const ExpandSection = ({ title, description, image }) => {
  return (
    <Container image={image}>
      <Title>{title}</Title>
      <Image src={require(`../assets/photos/${image}`)} />
      <LineBreak />
      <Description>{description}</Description>
    </Container>
  );
};

export default ExpandSection;

const Title = styled.h3`
  color: black;
  font-size: 1.5rem;
  margin: 3em 1em 0em 1em;
  transition: all 0.35s;
`;

const LineBreak = styled.div`
  width: 90%;
  background-color: black;
  height: 1.5px;
  margin: 0em 1em;
  transition: all 0.35s;
`;

const Description = styled.p`
  margin: 1em;
`;

const Image = styled.img`
  overflow: hidden;
  position: relative;
  margin: 0em 1em;
  width: 90%;
  height: 0px;
  object-fit: cover;
  transition: all 0.35s;
`;

const Container = styled.div`
  background-color: transparent; // rgb(220, 219, 219, 0.5)
  width: 100%;
  height: 250px;
  &:hover ${LineBreak} {
    transition: all 0.35s;
  }
  &:hover ${Image} {
    transition: all 0.35s;
    height: 180px;
  }
  &:hover ${Title} {
    transition: all 0.35s;
    margin: 1em 1em 0em 1em;
  }
`;
