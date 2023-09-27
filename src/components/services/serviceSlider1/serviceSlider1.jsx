import mobile from '../../../assets/ServicesMobileApp.png'
import './serviceSlider1.css'
const ServiceSlider1 = () => {
  return (
    <>
      <div id="slide1-container">
        <div id="slide1-first">
          <div id="slide1-heading">
            <p id="slide1-h1">We develop</p>
            <p id="slide1-h2">Hybrid Mobile Apps</p>
            <p id="slide1-h3">
              That helps you target both ios and android end users.
            </p>
          </div>
        </div>
        <div id="slide1-second">
          <img src={mobile} alt="Service1" />
        </div>
        <p id="slide1-para1">
          Our team of expert developers boasts unparalleled knowledge of the
          latest technologies and frameworks, enabling us to create apps that
          are perfectly optimized for both iOS and Android devices.
        </p>
        <p id="slide1-para2">
          From integeration with back-end systems to implementation of advanced
          features, such as geolocation, push notifications, and payment
          processing, we can craete custom mobile appstailored to your business
          needs.
        </p>
      </div>
    </>
  )
}
export default ServiceSlider1
