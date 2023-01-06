import React from "react";
import styled from "styled-components";

const WorkPreviewSection = ({ title, description, image }) => {
  return (
    <WorkContainer>
      <Image src={require(`../assets/photos/${image}`)} />
      <InfoContainer>
        <Title>{title}</Title>
        <LineBreak />
        <Description>{description}</Description>
      </InfoContainer>
    </WorkContainer>
  );
};

export default WorkPreviewSection;

const Image = styled.img`
  position: absolute;
  object-fit: cover;
  width: 100%;
  transition: all 0.35s;
  z-index: -1;
`;

const InfoContainer = styled.div`
  margin: 0 10% 8% 10%;
`;

const Title = styled.h1`
  color: white;
  font-size: 2.5rem;
  z-index: 1;
`;

const LineBreak = styled.div`
  width: 90%;
  background-color: white;
  height: 1.2px;
  margin: 0em 1em;
  transition: all 0.35s;
`;

const Description = styled.p`
  color: white;
  z-index: 1;
  transition: all 0.35s;
  display: none;
`;

const WorkContainer = styled.div`
  width: 100vw;
  height: 90vh;
  position: relative;
  overflow: hidden;
  object-position: center;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  &:hover {
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
  }
  &:hover ${Image} {
    transition: all 0.35s;
    transform: scale(1.1);
    object-position: center;
  }
  &:hover ${Description} {
    transition: all 0.35s;
    display: contents;
  }
`;
