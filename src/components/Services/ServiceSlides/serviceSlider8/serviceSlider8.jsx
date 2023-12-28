import DevTeam from "../../../../assets/dev-team-collaboration.png";
import "./serviceSlider8.css";
const ServiceSlider8 = () => {
  return (
    <>
      <hr />
      <div id="slide8-container">
        <div id="slide8-first">
          <div id="slide8-heading">
            <p id="slide8-h1">We Offer</p>
            <p id="slide8-h2">Managed IT Service</p>
            <p id="slide8-h3">To handle your product maintenance and updates</p>
          </div>
        </div>
        <div id="slide8-second">
          <img src={DevTeam} alt="Service8" />
        </div>
        <p>
          Whether it's outsourcing software development, managing software
          updates, or ensuring software compliance, we've got you covered. Our
          team of experts takes a proactive approach to software management,
          identifying potential issues before they become problems and
          addressing them promptly. We believe in taking the time to understand
          your business needs and providing tailored solutions that work for
          you.
        </p>
        <p>
          At our company, we understand that managing software can be a
          time-consuming and costly process. That's why we offer managed IT
          services to help streamline your software management needs. From
          software development to maintenance, our team of experts can handle
          all aspects of your software requirements. Our outsourcing services
          allow you to focus on your core business while we handle the technical
          aspects. Let us help you take your business to the next level with our
          managed IT services.
        </p>
      </div>
    </>
  );
};
export default ServiceSlider8;
