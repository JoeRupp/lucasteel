import React, { useEffect, useState } from "react";
import styled from "styled-components";

const HeroImageCarousel: React.FC = () => {
  const carouselPosition = [1, 2, 3, 4, 5];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      carouselScroll();
    }, 6000);
    return () => clearInterval(interval);
  });

  const carouselScroll = () => {
    setCurrentImage(currentImage + 1);
    if (currentImage === carouselPosition.length - 1) {
      setCurrentImage(0);
    }
  };

  return (
    <CarouselContainer>
      <CarouselItem style={{ transform: `translate(-${currentImage * 100}%)` }}>
        <HeroImage
          id="homePageHeroImage"
          src={require("../assets/photos/heroImages/04062023_Landino_DSC0455.jpg")}
        />
      </CarouselItem>
      <CarouselItem style={{ transform: `translate(-${currentImage * 100}%)` }}>
        <HeroImage
          id="homePageHeroImage"
          src={require("../assets/photos/heroImages/02082023_Landino_DSC9706.jpg")}
        />
      </CarouselItem>
      <CarouselItem style={{ transform: `translate(-${currentImage * 100}%)` }}>
        <HeroImage
          id="homePageHeroImage"
          src={require("../assets/photos/heroImages/04062023_Landino_DSC0067.jpg")}
        />
      </CarouselItem>
      <CarouselItem style={{ transform: `translate(-${currentImage * 100}%)` }}>
        <HeroImage
          id="homePageHeroImage"
          src={require("../assets/photos/heroImages/02082023_Landino_DSC9961.jpg")}
        />
      </CarouselItem>
      <CarouselItem style={{ transform: `translate(-${currentImage * 100}%)` }}>
        <HeroImage
          id="homePageHeroImage"
          src={require("../assets/photos/heroImages/04062023_Landino_DSC0113.jpg")}
        />
      </CarouselItem>
      <CarouselControls>
        <CarouselSelector
          active={currentImage === 0}
          onClick={() => setCurrentImage(0)}
        ></CarouselSelector>
        <CarouselSelector
          active={currentImage === 1}
          onClick={() => setCurrentImage(1)}
        ></CarouselSelector>
        <CarouselSelector
          active={currentImage === 2}
          onClick={() => setCurrentImage(2)}
        ></CarouselSelector>
        <CarouselSelector
          active={currentImage === 3}
          onClick={() => setCurrentImage(3)}
        ></CarouselSelector>
        <CarouselSelector
          active={currentImage === 4}
          onClick={() => setCurrentImage(4)}
        ></CarouselSelector>
      </CarouselControls>
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
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  align-content: center;
  transition: transform 1s ease-in-out;
`;

const HeroImage = styled.img`
  width: 100vw;
  height: 100%;
  object-fit: cover;
  @media (max-width: 1080px) {
    height: 100vh;
  }
`;

const CarouselControls = styled.div`
  position: absolute;
  width: 8rem;
  bottom: 0;
  left: 50%;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  margin-left: -4rem;
  padding: 0.2rem;
  background-color: rgba(0, 0, 0, 0.168);
`;

const CarouselSelector = styled.div<{ active: boolean }>`
  height: 10px;
  width: ${(props) => (props.active ? "35px" : "10px")};
  margin: 5px;
  background-color: ${(props) =>
    props.active ? "rgb(255, 255, 255)" : "rgba(255, 255, 255, 0.55)"};
  cursor: pointer;
  transition: all 0.35s;
`;
