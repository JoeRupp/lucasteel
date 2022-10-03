import React from "react";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import ContactPage from "./ContactPage";
import WorkPage from "./WorkPage";
import NoMatch from "./NoMatch";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

const App = () => {
  return (
    <Main>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/contact" element={<ContactPage />} />
        <Route exact path="/work" element={<WorkPage />} />
        <Route exact path="*" element={<NoMatch />} />
      </Routes>
    </Main>
  );
};

export default App;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
