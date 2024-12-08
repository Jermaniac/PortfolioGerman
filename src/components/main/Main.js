import Banner from "components/banner/Banner";
import Projects from "components/projects/Projects";
import About from "components/about/About";
import Contact from "components/contact/Contact";
import Progression from "components/progression/Progression";

const Main = () => {
  return (
    <>
      <Banner></Banner>
      <About></About>
      <Progression></Progression>
      <Projects></Projects>
      <Contact></Contact>
    </>
  );
};

export default Main;
