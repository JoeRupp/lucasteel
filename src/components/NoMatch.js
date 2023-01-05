import React from "react";
import styled from "styled-components";

const NoMatch = () => {
  return (
    <NoMatchSection>
      <h1>404</h1>
      <p>
        Sorry, we couldn't find what you were looking for. Double check the URL.
      </p>
    </NoMatchSection>
  );
};

export default NoMatch;

const NoMatchSection = styled.section``;
