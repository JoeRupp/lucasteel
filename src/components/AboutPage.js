import React from "react";
import styled from "styled-components";
import TeamMemberProfile from "./TeamMemberProfile";

const AboutPage = () => {
  return (
    <AboutContainer>
      <HeroImage src={require("../assets/photos/sparkBanner.jpeg")} />
      <GeneralAboutSection>
        <SubHeader>About Us:</SubHeader>
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
      <TeamSection>
        <SubHeader>Meet the Team:</SubHeader>
        <TeamMemberProfile
          name="Lucas Onorato"
          role="Owner/Founder"
          bio="If you can dream it we can build it.” With five years of experience welding and fabricating, Lucas has turned his hobby into a business where anything can be made. With a background of working with talented local artists, Lucas quickly excelled in welding sculptures and decorative furnishings. With a passion for creativity and an eye for detail, Lucas can find the solutions clients need while fitting a unique artistic design."
          picture="LucasProfile.png"
        />
        <TeamMemberProfile
          name="Zachary Miner"
          role="Shop Manager/CAD Engineer"
          bio="Graduating from Colorado School of Mines with a degree in Mechanical Engineering, Zachary uses his engineering experience and forward-thinking design to create the 3D CAD design. He then uses his welding skills to bring these ideas to life. "
          picture="ZachProfile.png"
        />
        <TeamMemberProfile
          name="Hanna Rupp"
          role="Business Manager"
          bio="With a degree in Finance from the University of Denver and a background in Financial Planning and Analysis, Hanna oversees that the business runs smoothly. From bookkeeping to research, she keeps the numbers straight and the office in order."
          picture="HannaProfile.png"
        />
      </TeamSection>
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

const HeroImage = styled.img`
  width: 100%;
  height: 110vh;
  object-fit: cover;
`;

const SubHeader = styled.h2`
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 2rem;
`;

const AboutText = styled.p``;

const TeamSection = styled.section`
  background-color: white;
  height: 100%;
  width: 80%;
  padding: 5% 10%;
  display: grid;
`;
