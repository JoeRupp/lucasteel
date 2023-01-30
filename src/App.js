import React from "react";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import WorkPage from "./pages/WorkPage";
import ProjectPage from "./pages/ProjectPage";
// import ShopPage from "./ShopPage";
import NoMatch from "./pages/NoMatchPage";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import allProjects from "./data/projects";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <Main>
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route
          exact
          path="/work"
          element={<WorkPage projects={allProjects} />}
        />
        <Route path="/project/:id" element={<ProjectPage />} />
        {/* <Route exact path="/shop" element={<ShopPage />} /> */}
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/contact" element={<ContactPage />} />
        <Route exact path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </Main>
  );
};

export default App;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
