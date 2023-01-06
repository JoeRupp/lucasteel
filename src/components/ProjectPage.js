import React from "react";
import styled from "styled-components";

const ProjectPage = ({ currentProject }) => {
  console.log(currentProject);
  return (
    <div>
      <h1>Yes?</h1>
      <h1>Project: ${currentProject.title}</h1>
    </div>
  );
};

export default ProjectPage;
