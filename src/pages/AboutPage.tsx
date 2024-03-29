import React from "react";
import styled from "styled-components";
import TeamMemberProfile from "../components/TeamMemberProfile";
import { COLORS } from "../constants";

const AboutPage: React.FC = () => {
  return (
    <AboutContainer>
      <HeroImage
        id="aboutPageHeroImage"
        src={require("../assets/photos/heroImages/grinding-sparks.png")}
      />
      <GeneralAboutSection>
        <SubHeader>ABOUT US:</SubHeader>
        <AboutText>
          LucaSteel Welding and Fabrication is a welding shop based out of Wheat
          Ridge, Colorado. Lucas Onorato, the owner, and founder, has 5+ years
          of experience working with clients to build many projects varying in
          size and material. He started the shop with the goal to create
          one-of-a-kind products that fit the need of all and any clients.
          LucaSteel has the skills and experience to create any project of the
          highest quality possible.
          <br />
          <br />
          We pride ourselves on the ability to think out of the box and
          problem-solve to create solutions that are practical and look
          excellent.
          <br />
          <br />
          Get to know us better and check out the team below!
        </AboutText>
      </GeneralAboutSection>
      <TeamSection>
        <SubHeaderTwo>MEET THE TEAM:</SubHeaderTwo>
        <TeamProfileOrganizer id="teamProfileOrganizer">
          <TeamMemberProfile
            name="Lucas Onorato"
            role="Owner/Founder"
            bio="'If you can dream it, we can build it.' Starting as a kid learning to weld, Lucas has turned his hobby into a business where anything can be made. With a background of working with talented local artists, Lucas quickly excelled in welding sculptures and decorative furnishings. With a passion for creativity and an eye for detail, Lucas can find the solutions clients need while fitting a unique artistic style."
            picture="LucasProfile.png"
          />
          <TeamMemberProfile
            name="Hanna Rupp"
            role="Business Manager"
            bio="With a degree in Finance from the University of Denver and a background in Financial Planning and Analysis, Hanna oversees that the business runs smoothly. From bookkeeping to research, she keeps the numbers straight and the office in order."
            picture="HannaProfile.png"
          />
        </TeamProfileOrganizer>
      </TeamSection>
    </AboutContainer>
  );
};

export default AboutPage;

const AboutContainer = styled.section`
  width: 100vw;
`;

const GeneralAboutSection = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
  background-size: cover;
  overflow: hidden;
  height: 120vh;
  width: 80%;
  padding: 5% 10%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
`;

const HeroImage = styled.img`
  width: 100%;
  height: 110vh;
  object-fit: cover;
  position: fixed;
  z-index: -1;
  @media (max-width: 1080px) {
    height: 100vh;
  }
`;

const SubHeader = styled.h1`
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 2rem;
  color: ${COLORS.white};
`;

const SubHeaderTwo = styled.h1`
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 2rem;
  color: ${COLORS.black};
`;

const AboutText = styled.p`
  color: ${COLORS.white};
  font-family: korolev, sans-serif;
  font-size: 1.2rem;
`;

const TeamProfileOrganizer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
`;

const TeamSection = styled.section`
  background-color: ${COLORS.white};
  height: 100%;
  width: 80%;
  padding: 5% 10%;
`;
