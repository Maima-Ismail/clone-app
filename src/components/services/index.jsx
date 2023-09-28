import ServiceHeader from './serviceHeader/serviceHeader'
import ServiceSlides from './serviceSlides/serviceSlides'
import './index.css'
const Services = () => {
  return (
    <div className="services">
      <ServiceHeader />
      <div className="services-container">
        <div className="hidden-div"></div>
        <ServiceSlides />
      </div>
    </div>
  )
}
export default Services
