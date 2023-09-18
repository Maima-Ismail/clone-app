import SaaS from '../../../assets/ServicesSaaS.png'
import './serviceSlider5.css'
const ServiceSlider5 = () => {
  return (
    <>
      <hr />
      <div id="boxDiv">
        <p>
          Groltech offers complete Product development. Teams acquire skills to{' '}
          <b>model a whole business in one echo-system.</b>
        </p>
        <div id="leftDiv">
          <p id="p1">We Offer</p>
          <p id="p2">SaaS Development Solutions</p>
          <p id="p3">For your business that attracts your target market.</p>
        </div>
        <div id="rightDiv">
          <img src={SaaS} alt="Service5" />
          <p>
            We deliver industry-standard SaaS solutions with robust, scalable,
            secure, and efficient features. Our customizable services span from
            user interface design to data management and analytics, including
            integerations with third-party apps.
          </p>
        </div>
      </div>
    </>
  )
}
export default ServiceSlider5
