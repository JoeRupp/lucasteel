import React from "react";
import styled from "styled-components";

const AboutPage = () => {
  return (
    <AboutContainer>
      <GeneralAboutSection>
        <SubHeader>About LucaSteel</SubHeader>
        <AboutText>
          LucaSteel and Fabrication is a welding shop based out of Denver,
          Colorado. We started the shop with the goal to create one-of-a-kind
          products that fit the need of all and any clients. We have the skills
          and experience to create any project of the highest quality possible.
          We pride ourselves on the ability to think out of the box and
          problem-solve to create solutions that are practical and look
          excellent. Get to know us better and check out the team below!
        </AboutText>
      </GeneralAboutSection>
      <TeamSection>{/* <TeamMemberProfile/> */}</TeamSection>
    </AboutContainer>
  );
};

export default AboutPage;

const AboutContainer = styled.section`
  width: 100vw;
`;

const GeneralAboutSection = styled.section`
  background-color: white;
  height: 100%;
  width: 80%;
  padding: 5% 10%;
  display: grid;
`;

const SubHeader = styled.h2`
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 2rem;
`;

const AboutText = styled.p``;

const TeamSection = styled.section``;
