import './ServiceHeader.css'
const ServiceHeader = () => {
  return (
    <>
      <div className="service-header-container">
        <div className="background-image"></div>
        <div className="service-header-vertical-line"></div>
        <div className="service-header-first">
          <div className="service-header-heading">
            <p id="service-header-h1">You are at the right place.</p>
            <p id="service-header-h2">
              Groltech offers end-to-end software engineering services, with
              on-demand teams and resources to carry out full-scale enterprise
              digital transformation and product development.
            </p>
            <p id="service-header-h3">Learn more</p>
          </div>
        </div>
        <div className="service-header-second"></div>
      </div>
    </>
  )
}
export default ServiceHeader
