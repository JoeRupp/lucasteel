import React from "react";
import styled from "styled-components";
import WorkPreviewSection from "./WorkPreviewSection";

const WorkPage = ({ projects }) => {
  const workPreviews = () => {
    return projects.map((project) => {
      return (
        <WorkPreviewSection
          id={project.id}
          key={project.id}
          title={project.title}
          description={project.description}
          image={project.images[0]}
        />
      );
    });
  };

  return <WorkContainer>{workPreviews()}</WorkContainer>;
};

export default WorkPage;

const WorkContainer = styled.section`
  width: 100vw;
`;
