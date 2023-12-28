import HomePageSlider from "../../components/HomePage/HomePageSlider/HomePageSlider";
import HomePageProjects from "../../components/HomePage/HomePageProjects/HomePageProjects";
import HomePageServices from "../../components/HomePage/HomePageServices/HomePageServices";
import Footer from "../../components/Footer/Footer";
import Goal from "../../components/HomePage/Goal/Goal";
import HomeIndustriesSection from "../../components/HomePage/HomeIndustriesSection/HomeIndustriesSection";
import HeaderLaptop from "../../components/Header/HeaderLaptop";
import HeaderMobile from "../../components/Header/HeaderMobile";
import { useEffect, useState } from "react";
const Home = () => {
  const [isMobileHeaderVisible, setMobileHeaderVisibilty] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      setMobileHeaderVisibilty(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <HeaderLaptop />
      {isMobileHeaderVisible && <HeaderMobile />}
      <HomePageSlider />
      <HomePageProjects />
      <HomePageServices />
      <Goal />
      <HomeIndustriesSection />
      <Footer />
    </>
  );
};
export default Home;
