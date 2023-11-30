import React from "react";

import Banner from "../banner/Banner";
import Projects from "../projects/Projects";
import About from "../about/About";
import Contact from "../contact/Contact";
import Progression from "../progression/Progression";

const Main = () => {
  return (
    <>
      <Banner></Banner>
      <Progression></Progression>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
    </>
  );
};

export default Main;
