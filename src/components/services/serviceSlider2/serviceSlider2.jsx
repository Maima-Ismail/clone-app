import ecommerce from '../../../assets/ecommerce-web-solutions.png'
import './serviceSlider2.css'
const ServiceSlider2 = () => {
  return (
    <>
      <hr />
      <div className="container">
        <div className="first">
          <div className="passage">
            <p>
              Groltech develops custom software for small to medium-sized
              businesses and enterprises. We offer service like software
              development life-cycle, and meeting our customer’s diverse
              business and technological objectives.
            </p>
          </div>
          <div className="heading">
            <p id="h1">We provide</p>
            <p id="h2">E-commerce Solutions</p>
            <p id="h3">Which helps your business to flourish online.</p>
          </div>
        </div>
        <div className="second">
          <img src={ecommerce} alt="service2" />
          <p>
            Our experts can help you create an online storefront that's easy to
            use, efficient, and competitive. We specialize in product listing
            and pricing optimization, ensuring that your customers have access
            to the information they need to make informed purchasing decisions.
          </p>
        </div>
      </div>
    </>
  )
}
export default ServiceSlider2
