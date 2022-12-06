import React from "react";
import styled from "styled-components";
import Button from "./Button";

const HomePage = () => {
  return (
    <HomeContainer>
      <HeroImage
        src={require("../assets/photos/pete-wright-n1RJ7pXgGTE-unsplash.jpg")}
      />
      <ServicesSection>
        <SubHeader>WHAT WE OFFER:</SubHeader>
        <Button name="Contact" link="contact" />
      </ServicesSection>
    </HomeContainer>
  );
};

export default HomePage;

const HomeContainer = styled.section`
  width: 100vw;
`;

const HeroImage = styled.img`
  width: 100%;
`;

const ServicesSection = styled.section`
  background-color: white;
  height: 100vh;
  width: 100%;
  padding: 5% 10%;
`;

const SubHeader = styled.h2`
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 2rem;
`;
