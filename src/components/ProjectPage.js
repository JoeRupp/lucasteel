import React, { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import styled from "styled-components";
import allProjects from "../data/projects";
import ImageModal from "./ImageModal";

const ProjectPage = () => {
  const { id } = useParams();

  const [modalStatus, setModalStatus] = useState(false);
  const [currentModalPicture, setCurrentModalPicture] = useState(null);

  const findProject = (id) => {
    return allProjects.find((project) => {
      return project.id === Number(id);
    });
  };

  const handleModalPopUp = (pic) => {
    if (modalStatus) {
      setModalStatus(false);
      setCurrentModalPicture(null);
    } else {
      setModalStatus(true);
      setCurrentModalPicture(pic);
    }
  };

  const currentProject = findProject(id);

  const ProjectImages = (proj) => {
    return proj.images.map((pic) => {
      return (
        <ProjectPicture
          key={proj.images.indexOf(pic)}
          src={require(`../assets/photos/${pic}`)}
          onClick={() => handleModalPopUp(pic)}
        />
      );
    });
  };

  if (currentProject) {
    return (
      <ProjectContainer>
        {modalStatus ? (
          <ImageModal
            picture={currentModalPicture}
            handleModalPopUp={handleModalPopUp}
          />
        ) : (
          ""
        )}
        <HeroImage
          src={require(`../assets/photos/${currentProject.bannerImage}`)}
        />
        <ProjectInfoSection>
          <ProjectTitle>{currentProject.title}</ProjectTitle>
          <ProjectDescription>{currentProject.description}</ProjectDescription>
          <PictureOrganizer>{ProjectImages(currentProject)}</PictureOrganizer>
        </ProjectInfoSection>
      </ProjectContainer>
    );
  } else {
    return <Navigate to="/*" />;
  }
};

export default ProjectPage;

const ProjectContainer = styled.section`
  width: 100vw;
`;

const HeroImage = styled.img`
  width: 100%;
  height: 110vh;
  object-fit: cover;
`;

const ProjectTitle = styled.h1`
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 2rem;
`;

const ProjectDescription = styled.p``;

const PictureOrganizer = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  gap: 2em;
  grid-template-columns: 1fr 1fr 1fr;
`;

const ProjectPicture = styled.img`
  height: auto;
  width: 100%;
  cursor: pointer;
`;

const ProjectInfoSection = styled.section`
  background-color: white;
  height: 100%;
  width: 80%;
  padding: 5% 10%;
`;
