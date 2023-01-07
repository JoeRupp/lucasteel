import React from "react";
import { useParams, Navigate } from "react-router-dom";
import styled from "styled-components";
import allProjects from "../data/projects";

const ProjectPage = () => {
  const { id } = useParams();

  const findProject = (id) => {
    return allProjects.find((project) => {
      return project.id === Number(id);
    });
  };

  const currentProject = findProject(id);

  if (currentProject) {
    return (
      <div>
        <h1>Yes?</h1>
        <h1>Project: {currentProject.title}</h1>
      </div>
    );
  } else {
    return <Navigate to="/*" />;
  }
};

export default ProjectPage;
