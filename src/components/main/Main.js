import Banner from "../banner/Banner";
import Projects from "../projects/Projects";
import About from "../about/About";
import Contact from "../contact/Contact";
import CustomizedProgressBars from "../progression/Progression";

const Main = () => {
  return (
    <>
      <Banner></Banner>
      {/* <CustomizedProgressBars></CustomizedProgressBars> */}
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
    </>
  );
};

export default Main;
