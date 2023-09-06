import { transform } from "cypress/types/lodash";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const HeroImageCarousel: React.FC = () => {
  const carouselPosition = [1, 2, 3, 4, 5];
  const [currentImage, setCurrentImage] = useState(0);
  const carouselScroll = () => {
    setCurrentImage(currentImage + 1);
    if (currentImage === carouselPosition.length - 1) {
      setCurrentImage(0);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      carouselScroll();
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <CarouselContainer>
      {currentImage === 0 && (
        <CarouselItem>
          <HeroImage
            id="homePageHeroImage"
            src={require("../assets/photos/heroImages/04062023_Landino_DSC0455.jpg")}
          />
        </CarouselItem>
      )}
      {currentImage === 1 && (
        <CarouselItem>
          <HeroImage
            id="homePageHeroImage"
            src={require("../assets/photos/heroImages/02082023_Landino_DSC9706.jpg")}
          />
        </CarouselItem>
      )}
      {currentImage === 2 && (
        <CarouselItem>
          <HeroImage
            id="homePageHeroImage"
            src={require("../assets/photos/heroImages/04062023_Landino_DSC0067.jpg")}
          />
        </CarouselItem>
      )}
      {currentImage === 3 && (
        <CarouselItem>
          <HeroImage
            id="homePageHeroImage"
            src={require("../assets/photos/heroImages/02082023_Landino_DSC9961.jpg")}
          />
        </CarouselItem>
      )}
      {currentImage === 4 && (
        <CarouselItem>
          <HeroImage
            id="homePageHeroImage"
            src={require("../assets/photos/heroImages/04062023_Landino_DSC0113.jpg")}
          />
        </CarouselItem>
      )}
    </CarouselContainer>
  );
};

export default HeroImageCarousel;

const CarouselContainer = styled.section`
  background-color: black;
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
`;

const CarouselItem = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  align-content: center;
  transition: 1s cubic-bezier(0.39, 0.575, 0.565, 1);
`;

const HeroImage = styled.img`
  width: 100vw;
  height: 100%;
  object-fit: cover;
  @media (max-width: 1080px) {
    height: 100vh;
  }
`;
