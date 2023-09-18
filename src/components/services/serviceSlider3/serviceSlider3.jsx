import desktop from '../../../assets/pro-desktop.png'
import './serviceSlider3.css'
const ServiceSlider3 = () => {
  return (
    <>
      <hr />
      <div id="container">
        <div id="first">
          <div id="heading">
            <p id="heading1">We Offer</p>
            <p id="heading2">Legacy Apps Redesign</p>
            <p id="heading3">
              Also reviewing their architectures to give them a new life.
            </p>
          </div>
        </div>
        <div id="second">
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
