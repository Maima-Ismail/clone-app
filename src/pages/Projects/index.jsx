import HomePageProjects from "../../components/HomePage/HomePageProjects/HomePageProjects";
import Footer from "../../components/Footer/Footer";
import HeaderMobile from "../../components/Header/HeaderMobile";
import "./index.css";
const Projects = () => {
  return (
    <div className="projects-container">
      <HeaderMobile isBlackIcon={true} />
      <HomePageProjects />
      <Footer />
    </div>
  );
};
export default Projects;
