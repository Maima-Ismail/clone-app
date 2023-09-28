import ServiceHeader from './serviceHeader/serviceHeader'
import ServiceSlides from './serviceSlides/serviceSlides'
const Services = () => {
  return (
    <div className="services">
      <ServiceHeader />
      <div className="services-container">
        <div className="hidden-div">nothing</div>
        <ServiceSlides />
      </div>
    </div>
  )
}
export default Services
