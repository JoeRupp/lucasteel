import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants";

const NoMatch = () => {
  return (
    <NoMatchContainer>
      <HeroImage
        src={require("../assets/photos/pete-wright-n1RJ7pXgGTE-unsplash.jpg")}
      />
      <NoMatchSection>
        <Header>404</Header>
        <Message>
          Sorry, we couldn't find what you were looking for. Double check the
          URL.
        </Message>
      </NoMatchSection>
    </NoMatchContainer>
  );
};

export default NoMatch;

const NoMatchContainer = styled.section`
  width: 100vw;
`;

const NoMatchSection = styled.section`
  width: 100vw;
  height: 50vh;
  margin-top: 10%;
  width: 80%;
  padding: 5% 10%;
`;

const Header = styled.h1`
  font-size: 3rem;
  color: ${COLORS.white};
`;

const Message = styled.p`
  font-size: 1.2rem;
  color: ${COLORS.white};
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  position: fixed;
  z-index: -1;
`;
