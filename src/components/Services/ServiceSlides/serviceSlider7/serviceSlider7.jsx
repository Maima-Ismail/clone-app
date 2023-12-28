import WebPortal from '../../../../assets/ServicesWebPortal.png'
import './serviceSlider7.css'
const ServiceSlider7 = () => {
  return (
    <>
      <hr />
      <div id="slide7-container">
        <div id="slide7-first">
          <div id="slide7-heading">
            <p id="slide7-h1">We Offer</p>
            <p id="slide7-h2">Web Portal Development</p>
            <p id="slide7-h3">
              Including Employee/Customer B2B, eLearning, and eCommerce portals.
            </p>
          </div>
        </div>
        <div id="slide7-second">
          <img src={WebPortal} alt="Service7" />
          <p>
            Catering to diverse business requirements across Employee/Customer,
            B2B, eLearning, and eCommerce portals. Our team has in-depth
            knowledge of various technologies, ensuring seamless integration and
            user-friendly interfaces for enhanced engagement.
          </p>
        </div>
      </div>
    </>
  )
}
export default ServiceSlider7
