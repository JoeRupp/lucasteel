import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../constants";

type Props = {
  title: string;
  description: string;
  bannerImage: string;
  id: number;
};

const WorkPreviewSection: React.FC<Props> = ({
  title,
  description,
  bannerImage,
  id,
}) => {
  return (
    <WorkContainer to={`/project/${id}`}>
      <Image src={require(`../assets/photos/${bannerImage}`)} />
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
  height: 100%;
  transition: all 0.35s;
  z-index: -1;
`;

const InfoContainer = styled.div`
  margin: 0 10% 3% 10%;
`;

const Title = styled.h1`
  color: ${COLORS.white};
  font-size: 2.5rem;
  margin-bottom: 0;
  z-index: 1;
`;

const LineBreak = styled.div`
  width: 90%;
  background-color: ${COLORS.white};
  height: 1px;
`;

const Description = styled.p`
  font-family: korolev, sans-serif;
  width: 90%;
  color: ${COLORS.white};
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
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9));
  cursor: pointer;
  &:hover ${Image} {
    transition: all 0.35s;
    transform: scale(1.1);
    object-position: center;
  }
`;
