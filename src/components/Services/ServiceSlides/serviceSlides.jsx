import ServiceSlider1 from "./serviceSlider1/serviceSlider1";
import ServiceSlider2 from "./serviceSlider2/serviceSlider2";
import ServiceSlider3 from "./serviceSlider3/serviceSlider3";
import ServiceSlider4 from "./serviceSlider4/serviceSlider4";
import ServiceSlider5 from "./serviceSlider5/serviceSlider5";
import ServiceSlider6 from "./serviceSlider6/serviceSlider6";
import ServiceSlider7 from "./serviceSlider7/serviceSlider7";
import ServiceSlider8 from "./serviceSlider8/serviceSlider8";
import "./serviceSlides.css";
const ServiceSlides = () => {
  return (
    <>
      <div className="services-slides">
        <ServiceSlider1 />
        <ServiceSlider2 />
        <ServiceSlider3 />
        <ServiceSlider4 />
        <ServiceSlider5 />
        <ServiceSlider6 />
        <ServiceSlider7 />
        <ServiceSlider8 />
      </div>
    </>
  );
};
export default ServiceSlides;
