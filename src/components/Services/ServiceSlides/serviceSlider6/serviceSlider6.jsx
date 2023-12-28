import WebDesign from '../../../../assets/web-design.png'
import './serviceSlider6.css'
const ServiceSlider6 = () => {
  return (
    <>
      <hr />
      <div id="slide6-container">
        <div id="slide6-first">
          <div id="slide6-heading">
            <p id="slide6-h1">We design</p>
            <p id="slide6-h2">High Quality Websites</p>
            <p id="slide6-h3">
              For your busiess that attracts your target market.
            </p>
          </div>
        </div>
        <div id="slide6-second">
          <img src={WebDesign} alt="Service6" />
          <p>
            We strive to create websites that are both beautiful and functional.
            With our website design and development solutions, you can rest
            assured that your website will be modern, elegant, and perfectly
            optimized for success in the competitive digital landscape.
          </p>
        </div>
      </div>
    </>
  )
}
export default ServiceSlider6
