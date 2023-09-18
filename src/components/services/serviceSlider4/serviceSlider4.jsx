import quality from '../../../assets/ServicesQualityEngineer.png'
import './serviceSlider4.css'
const ServiceSlider4 = () => {
  return (
    <>
      <hr />
      <div id="box">
        <div id="left">
          <div id="headingDiv">
            <p id="head1">We Offer</p>
            <p id="head2">Quality Engineer & Testing</p>
            <p id="head3">
              For your web, desktop, mobile, and cloud based applications.
            </p>
          </div>
        </div>
        <div id="right">
          <img src={quality} alt="Service4" />
          <p>
            Groltech develops custom software for small to medium-sized
            businesses and enterprises. We offer service like software
            development life-cycle, and meeting our customer’s diverse business
            and technological objectives.
          </p>
        </div>
      </div>
    </>
  )
}
export default ServiceSlider4
