import React from "react";
import styled from "styled-components";
import WorkPreviewSection from "../components/WorkPreviewSection";
import Button from "../components/Button";
import { COLORS } from "../constants";

type Project = {
  id: number;
  title: string;
  description: string;
  bannerImage: string;
  images: string[];
};

type Props = {
  projects: Project[];
};

const WorkPage: React.FC<Props> = ({ projects }) => {
  const workPreviews = () => {
    return projects.map((project) => {
      return (
        <WorkPreviewSection
          id={project.id}
          key={project.id}
          title={project.title}
          description={project.description}
          bannerImage={project.bannerImage}
        />
      );
    });
  };

  return (
    <WorkContainer id="workContainer">
      {workPreviews()}
      <MoreWorkContainer>
        <MoreWorkText>
          Want to see more? Check out what we've recently been up to.
        </MoreWorkText>
        <Link
          href="https://www.instagram.com/lucas_steel_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button name="See more" />
        </Link>
      </MoreWorkContainer>
    </WorkContainer>
  );
};

export default WorkPage;

const WorkContainer = styled.section`
  width: 100vw;
`;

const MoreWorkContainer = styled.div`
  background-color: ${COLORS.white};
  width: 80%;
  padding: 0% 10%;
  height: 50vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

const Link = styled.a`
  text-decoration: none;
`;

const MoreWorkText = styled.p`
  max-width: 80%;
  font-family: korolev, sans-serif;
`;
