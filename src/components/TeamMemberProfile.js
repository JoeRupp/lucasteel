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
  width: 100%;
  height: 100%;
`;

const ProfilePicture = styled.img``;

const ProfileName = styled.h3``;

const ProfileRole = styled.h4``;

const ProfileBio = styled.p``;
