import './HomePageServices.css'
import Image1 from '../../../assets/ServicesWeWork1.png'
import Image2 from '../../../assets/ServicesWeWork2.png'
const HomePageServices = () => {
  return (
    <div className="home-services-container">
      <p className="home-services-heading1">Our Services</p>
      <p className="home-services-heading2">Services We Work Towards</p>
      <div className="home-service1">
        <p className="home-service1-heading">Software Engineering</p>
        <p className="home-service-list" id="service1-list1">
          Redesign
        </p>
        <p className="home-service-list" id="service1-list2">
          Custom Application
        </p>
        <p className="home-service-list" id="service1-list3">
          Legacy Apps
        </p>
        <p className="home-service-list" id="service1-list4">
          Software testing
        </p>
      </div>
      <div className="home-service2">
        <p className="home-service2-heading">Product Development</p>
        <p className="home-service-list" id="service2-list1">
          SaaS Development
        </p>
        <p className="home-service-list" id="service2-list2">
          Mobile Development
        </p>
        <p className="home-service-list" id="service2-list3">
          Entire business in one ecosystem
        </p>
      </div>
      <div className="home-service3">
        <p className="home-service3-heading">Web Portal Development</p>
        <p className="home-service-list" id="service3-list1">
          Employee/Customer portals
        </p>
        <p className="home-service-list" id="service3-list2">
          B2B portals
        </p>
        <p className="home-service-list" id="service3-list3">
          eLearning portals
        </p>
        <p className="home-service-list" id="service3-list4">
          eCommerce portals
        </p>
      </div>
      <div className="home-service4">
        <p className="home-service4-heading">Managed IT Service</p>
        <p className="home-service-list" id="service4-list1">
          Outsourced product development
        </p>
        <p className="home-service-list" id="service4-list2">
          Maintenance
        </p>
        <p className="home-service-list" id="service4-list3">
          Integrations
        </p>
        <p className="home-service-list" id="service4-list4">
          Dev teams
        </p>
      </div>
    </div>
  )
}
export default HomePageServices