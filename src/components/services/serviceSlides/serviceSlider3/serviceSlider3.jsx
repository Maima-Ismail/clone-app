import desktop from '../../../../assets/pro-desktop.png'
import './serviceSlider3.css'
const ServiceSlider3 = () => {
  return (
    <>
      <hr />
      <div id="slide3-container">
        <div id="slide3-first">
          <div id="slide3-heading">
            <p id="slide3-h1">We Offer</p>
            <p id="slide3-h2">Legacy Apps Redesign</p>
            <p id="slide3-h3">
              Also reviewing their architectures to give them a new life.
            </p>
          </div>
        </div>
        <div id="slide3-second">
          <img src={desktop} alt="Service3" />
          <p>
            With the rapid advancement of technology, legacy applications can
            quickly become outdated and difficult to maintain. Our team of
            experts specializes in redesigning legacy applications to improve
            their user interface, functionality, and security.
          </p>
        </div>
      </div>
    </>
  )
}
export default ServiceSlider3
