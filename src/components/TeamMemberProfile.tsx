import styled from "styled-components";
import { COLORS } from "../constants";

type Props = {
  name: string;
  role: string;
  bio: string;
  picture: string;
};

const TeamMemberProfile = ({ name, role, bio, picture }: Props) => {
  return (
    <ProfileContainer>
      <ProfilePicture src={require(`../assets/photos/profiles/${picture}`)} />
      <ProfileName>{name}</ProfileName>
      <ProfileRole>{role}</ProfileRole>
      <ProfileBio>{bio}</ProfileBio>
    </ProfileContainer>
  );
};

export default TeamMemberProfile;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const ProfilePicture = styled.img`
  width: 100%;
`;

const ProfileName = styled.h2`
  font-size: 2em;
  margin: 10px 0px;
`;

const ProfileRole = styled.h3`
  font-size: 1.3rem;
  color: ${COLORS.steelSiver};
  margin: 0;
`;

const ProfileBio = styled.p`
  font-size: 1.2rem;
`;
