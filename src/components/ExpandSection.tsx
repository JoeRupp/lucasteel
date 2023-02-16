import styled from "styled-components";
import { COLORS } from "../constants";

type Props = {
  title: string;
  description: string;
  image: string;
};

const ExpandSection = ({ title, description, image }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Image src={require(`../assets/photos/${image}`)} />
      <LineBreak />
      <Description>{description}</Description>
    </Container>
  );
};

export default ExpandSection;

const Title = styled.h3`
  color: ${COLORS.black};
  font-size: 1.5rem;
  margin: 3em 1em 0em 1em;
  transition: all 0.35s;
  @media (max-width: 800px) {
    transition: none;
    margin: 1em 1em 0em 1em;
  }
`;

const LineBreak = styled.div`
  width: 90%;
  background-color: ${COLORS.black};
  height: 1.5px;
  margin: 0em 1em;
  transition: all 0.35s;
  @media (max-width: 800px) {
    transition: none;
  }
`;

const Description = styled.p`
  margin: 1em;
`;

const Image = styled.img`
  overflow: hidden;
  position: relative;
  margin: 0em 1em;
  width: 90%;
  height: 0px;
  object-fit: cover;
  transition: all 0.35s;
  @media (max-width: 800px) {
    height: 100px;
  }
`;

const Container = styled.div`
  background-color: transparent;
  width: 100%;
  height: 250px;
  &:hover ${LineBreak} {
    transition: all 0.35s;
    @media (max-width: 800px) {
      transition: none;
    }
  }
  &:hover ${Image} {
    transition: all 0.35s;
    height: 180px;
    @media (max-width: 800px) {
      transition: none;
      height: 100px;
    }
  }
  &:hover ${Title} {
    transition: all 0.35s;
    margin: 1em 1em 0em 1em;
    @media (max-width: 800px) {
      transition: none;
      margin: 1em 1em 0em 1em;
    }
  }
`;
