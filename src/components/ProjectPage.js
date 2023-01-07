import React from "react";
import { useParams, Navigate } from "react-router-dom";
import styled from "styled-components";

const ProjectPage = () => {
  const { id } = useParams();
  const allProjects = [
    {
      title: "Work 1",
      id: 1,
      description: "rabble rabble 1",
      images: ["pete-wright-n1RJ7pXgGTE-unsplash.jpg"],
    },
    {
      title: "Work 2",
      id: 2,
      description: "rabble rabble 2",
      images: ["pete-wright-n1RJ7pXgGTE-unsplash.jpg"],
    },
    {
      title: "Work 3",
      id: 3,
      description: "rabble rabble 3",
      images: ["pete-wright-n1RJ7pXgGTE-unsplash.jpg"],
    },
  ];

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
