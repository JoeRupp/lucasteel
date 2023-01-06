import React from "react";
import styled from "styled-components";
import WorkPreviewSection from "./WorkPreviewSection";

const WorkPage = () => {
  return (
    <WorkContainer>
      <WorkPreviewSection
        title="Work"
        description="test test test"
        image="pete-wright-n1RJ7pXgGTE-unsplash.jpg"
      />
      <WorkPreviewSection
        title="Work"
        description="test test test"
        image="pete-wright-n1RJ7pXgGTE-unsplash.jpg"
      />
      <WorkPreviewSection
        title="Work"
        description="test test test"
        image="pete-wright-n1RJ7pXgGTE-unsplash.jpg"
      />
    </WorkContainer>
  );
};

export default WorkPage;

const WorkContainer = styled.section`
  width: 100vw;
`;
