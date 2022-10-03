import React from "react";
import styled from "styled-components";

const NoMatch = () => {
  return (
    <NoMatchSection>
      <h1>404</h1>
      <p>
        We couldn't find what you were looking for - try something different I
        guess?
      </p>
    </NoMatchSection>
  );
};

export default NoMatch;

const NoMatchSection = styled.section``;
