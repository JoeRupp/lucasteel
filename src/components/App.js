import React from "react";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import WorkPage from "./WorkPage";
import ProjectPage from "./ProjectPage";
import ShopPage from "./ShopPage";
import NoMatch from "./NoMatch";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

const App = () => {
  const allProjects = [
    {
      title: "Work 1",
      id: 1,
      description: "rabble rabble 1",
      images: ["pete-wright-n1RJ7pXgGTE-unsplash.jpg"],
    },
    {
      title: "Work 2",
      id: 2,
      description: "rabble rabble 2",
      images: ["pete-wright-n1RJ7pXgGTE-unsplash.jpg"],
    },
    {
      title: "Work 3",
      id: 3,
      description: "rabble rabble 3",
      images: ["pete-wright-n1RJ7pXgGTE-unsplash.jpg"],
    },
  ];

  return (
    <Main>
      <NavBar />
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
