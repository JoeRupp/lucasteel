import React from "react";
import styled from "styled-components";

const TeamMemberProfile = ({ name, role, bio, picture }) => {
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

const ProfileName = styled.h3`
  font-size: 2em;
  margin: 10px 0px;
`;

const ProfileRole = styled.h4`
  font-size: 1.3rem;
  color: lightgray;
  margin: 0;
`;

const ProfileBio = styled.p`
  font-size: 1.2rem;
`;
