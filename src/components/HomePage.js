import React from "react";
import styled from "styled-components";
import LinkButton from "./LinkButton";
import ExpandSection from "./ExpandSection";

const HomePage = () => {
  return (
    <HomeContainer>
      <HeroImage
        src={require("../assets/photos/rob-lambert-9Q_pLLP_jmA-unsplash.jpg")}
      />
      <ServicesSection>
        <SubHeader>WHAT WE OFFER:</SubHeader>
        <ExplandableOrganizer>
          <ExpandSection
            title="Custom Projects"
            description="At LucaSteel and Fabrication, we pride ourselves on our ability to complete almost any project. Whether it be simple or completely new and unknown."
            image="pete-wright-n1RJ7pXgGTE-unsplash.jpg"
          />
          <ExpandSection
            title="Multi Materials"
            description="LucaSteel and Fabrication specializes in working with Steel, Stainless Steel, Aluminum, Copper, and Bronze.  This allows us to expand the envelope of what is possible creating more fascinating projects with complex designs. "
            image="pete-wright-n1RJ7pXgGTE-unsplash.jpg"
          />
          <ExpandSection
            title="Railing"
            description="Railing is built to all local standards and to customer specifications so you get exactly what you want in the best quality possible."
            image="pete-wright-n1RJ7pXgGTE-unsplash.jpg"
          />
          <ExpandSection
            title="Furniture"
            description="Art should be expressive and functional, furniture has the unique aspect of design and function. We work with clients to not only create unique pieces but something that can be used daily and will withstand time."
            image="pete-wright-n1RJ7pXgGTE-unsplash.jpg"
          />
          <ExpandSection
            title="CNC Plasma Cutting"
            description="We offer plasma cutting for small batch production or small projects while also doing all our own plasma cutting in house. You can submit your DXF files on our “Contact” page. You may also submit drawings and for an extra fee we can help design in CAD."
            image="pete-wright-n1RJ7pXgGTE-unsplash.jpg"
          />
          <ExpandSection
            title="Art"
            description="Creativity is at the heart of what we do. As well as our experience working with two great artists in the Denver area, Dennis West and Kevin Robb we have the skill to complete any commission or create one-of-a-kind artwork."
            image="pete-wright-n1RJ7pXgGTE-unsplash.jpg"
          />
          <ExpandSection
            title="Production"
            description="We also have the means to do small batch production on parts and full units."
            image="pete-wright-n1RJ7pXgGTE-unsplash.jpg"
          />
          <ExpandSection
            title="Computer Aided Design (CAD)"
            description="We use CAD to be able to show customers what a project will look like before construction. As well as the ability to design parts in-house and produce those parts."
            image="pete-wright-n1RJ7pXgGTE-unsplash.jpg"
          />
        </ExplandableOrganizer>
        <LinkButton name="Get a Quote" link="contact" />
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
  height: 110vh;
  object-fit: cover;
`;

const ServicesSection = styled.section`
  background-color: white;
  height: 100%;
  width: 80%;
  padding: 5% 10%;
`;

const SubHeader = styled.h2`
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 2rem;
`;

const ExplandableOrganizer = styled.div`
  margin: 5% 0%;
  display: grid;
  justify-items: center;
  align-items: center;
  gap: 2em;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
`;
