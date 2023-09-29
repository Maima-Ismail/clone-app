import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import arrow from '../../assets/arrow-right-white.png'
import './footer.css'
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-icons-top">
        <FontAwesomeIcon icon={faLinkedinIn} id="icon1" className="icon" />
        <FontAwesomeIcon icon={faFacebookF} id="icon2" className="icon" />
        <FontAwesomeIcon icon={faInstagram} id="icon3" className="icon" />
      </div>
      <div className="footer-first-div">
        <div className="footer-about">
          <p className="h1">About us</p>
          <p className="h2">Background</p>
          <p className="h2">Team</p>
          <p className="h2">Contact</p>
        </div>
        <div className="footer-services">
          <p className="h1">Services</p>
          <p className="h2">Product Development</p>
          <p className="h2">Software Engineer</p>
          <p className="h2">Managed IT Service</p>
        </div>
      </div>
      <div className="footer-newsletter">
        <p className="newsletter-heading">
          Join our news letter to Know our latest feeds
        </p>
        <div className="newsletter-input">
          <input type="text" placeholder="Email Address" />
          <button type="submit">
            <img src={arrow} alt="Enter" />
          </button>
        </div>
      </div>
      <div className="footer-tos">
        <p className="h2">Terms of Services</p>
        <p className="h2">Privacy Policy</p>
      </div>
      <div className="footer-icons">
        <FontAwesomeIcon icon={faLinkedinIn} id="icon1" className="icon" />
        <FontAwesomeIcon icon={faFacebookF} id="icon2" className="icon" />
        <FontAwesomeIcon icon={faInstagram} id="icon3" className="icon" />
      </div>
    </div>
  )
}
export default Footer
