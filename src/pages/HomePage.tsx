import React from "react";
import styled from "styled-components";
import HeroImageCarousel from "../components/HeroImageCarousel";
import LinkButton from "../components/LinkButton";
import ExpandSection from "../components/ExpandSection";
import { COLORS } from "../constants";

const HomePage: React.FC = () => {
  return (
    <HomeContainer>
      <HeroImageCarousel></HeroImageCarousel>
      <ServicesSection>
        <Header>WHAT WE OFFER:</Header>
        <IntroParagraph>
          LucaSteel and Fabrication is a welding and fabrication business based
          out of Wheat Ridge, Colorado. We started the shop with the goal to
          create one-of-a-kind products that fit the need of any and all
          clients. We offer a wide range of services - check them out below.
        </IntroParagraph>
        <ExpandableOrganizer id="expandableOrganizer">
          <ExpandSection
            title="Custom Projects"
            description="Got an idea for a project? Great! We would love to hear about it. We pride ourselves on our ability to complete almost any project no matter the size or complexity."
            image="custom-projects.png"
          />
          <ExpandSection
            title="Multi Materials"
            description="We specialize in working with Steel, Stainless Steel, Aluminum, Copper, and Bronze. This allows us to push the envelope of what is possible and creat more fascinating projects with complex designs."
            image="multi-material.png"
          />
          <ExpandSection
            title="Railing"
            description="Railing is built to all local standards and to customer specifications so you get exactly what you want in the best quality possible."
            image="railing.png"
          />
          <ExpandSection
            title="Furniture"
            description="Art should be expressive and functional, furniture has the unique aspect of design and function. We work with clients to not only create unique pieces but something that can be used daily and will withstand time."
            image="furniture.png"
          />
          <ExpandSection
            title="CNC Plasma Cutting"
            description="We do all our own plasma cutting in-house, and offer plasma cutting for small batch production or small projects. You can submit your DXF files by emailing us directly at lucasteelandfabrication@gmail.com. You may also submit drawings and for an extra fee we can help put your designs into CAD."
            image="plasma-cutting.png"
          />
          <ExpandSection
            title="Art"
            description="Creativity is at the heart of what we do. With our experience working along side great artists in the Denver area, like Dennis West and Kevin Robb, we have the skill to complete any commission or create a one-of-a-kind piece."
            image="art.png"
          />
          <ExpandSection
            title="Production"
            description="We have the means to do small batch production on parts and full units."
            image="production.png"
          />
          <ExpandSection
            title="Computer Aided Design (CAD)"
            description="We use CAD to show customers what a project will look like before construction. This also gives us the ability to design parts in-house and then produce those parts."
            image="cad.png"
          />
        </ExpandableOrganizer>
        <LinkButton name="Get a Quote" link="contact" />
      </ServicesSection>
    </HomeContainer>
  );
};

export default HomePage;

const HomeContainer = styled.section`
  width: 100vw;
`;

const ServicesSection = styled.section`
  background-color: ${COLORS.white};
  height: 100%;
  width: 80%;
  padding: 5% 10%;
`;

const Header = styled.h1`
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 2rem;
`;

const IntroParagraph = styled.p``;

const ExpandableOrganizer = styled.div`
  margin: 5% 0% 8% 0%;
  display: grid;
  justify-items: center;
  align-items: center;
  gap: 2em;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  }
`;
