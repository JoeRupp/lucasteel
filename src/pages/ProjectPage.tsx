import React, { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import styled from "styled-components";
import allProjects from "../data/projects";
import ImageModal from "../components/ImageModal";
import { COLORS } from "../constants";

type Project = {
  id: number;
  title: string;
  description: string;
  bannerImage: string;
  images: string[];
};

const ProjectPage = () => {
  const { id } = useParams<string>();

  const [modalStatus, setModalStatus] = useState<boolean>(false);
  const [currentModalPicture, setCurrentModalPicture] = useState<string>("");

  const findProject = (id: string | undefined): Project | undefined => {
    return allProjects.find((project) => {
      return project.id === Number(id);
    });
  };

  const handleModalPopUp = (pic: string): void => {
    if (modalStatus) {
      setModalStatus(false);
      setCurrentModalPicture("");
    } else {
      setModalStatus(true);
      setCurrentModalPicture(pic);
    }
  };

  const currentProject = findProject(id);

  const ProjectImages = (proj: Project) => {
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
          <PictureOrganizer id="pictureOrganizer">
            {ProjectImages(currentProject)}
          </PictureOrganizer>
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
  @media (max-width: 1080px) {
    height: 100vh;
  }
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
  @media (max-width: 1080px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectPicture = styled.img`
  height: auto;
  width: 100%;
  cursor: pointer;
`;

const ProjectInfoSection = styled.section`
  background-color: ${COLORS.white};
  height: 100%;
  width: 80%;
  padding: 5% 10%;
`;
