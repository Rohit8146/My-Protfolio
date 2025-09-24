import React from "react";
import Banner from "../components/HeroBanner/Banner";
import WorkExp from "../components/Work/WorkExp";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";

function HomePage() {
  return (
    <>
      <Banner />
      <WorkExp />
      <Skills />
      <Projects />
    </>
  );
}

export default HomePage;
