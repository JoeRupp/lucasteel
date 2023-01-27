import React from "react";
import styled from "styled-components";
import WorkPreviewSection from "../components/WorkPreviewSection";

const WorkPage = ({ projects }) => {
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

  return <WorkContainer id="workContainer">{workPreviews()}</WorkContainer>;
};

export default WorkPage;

const WorkContainer = styled.section`
  width: 100vw;
`;
