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
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<WorkPage projects={allProjects} />} />
        <Route path="/project/:id" element={<ProjectPage />} />
        {/* <Route path="/shop" element={<ShopPage />} /> */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NoMatch />} />
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
