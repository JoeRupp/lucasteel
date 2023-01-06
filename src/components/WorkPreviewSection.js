import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const WorkPreviewSection = ({ title, description, image, link, id }) => {
  return (
    <WorkContainer to={`/project/${id}`}>
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
  margin-bottom: 0;
  z-index: 1;
`;

const LineBreak = styled.div`
  width: 90%;
  background-color: white;
  height: 1px;
`;

const Description = styled.p`
  color: white;
  z-index: 1;
`;

const WorkContainer = styled(Link)`
  width: 100vw;
  height: 90vh;
  position: relative;
  overflow: hidden;
  object-position: center;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  text-decoration: none;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
  cursor: pointer;
  &:hover ${Image} {
    transition: all 0.35s;
    transform: scale(1.1);
    object-position: center;
  }
`;
