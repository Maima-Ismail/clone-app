import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import arrow from '../../assets/arrow-right-white.png'
import { Formik, Field, ErrorMessage } from 'formik'
import './footer.css'
import { NewsletterSchema } from '../../schemas'
const Footer = () => {
  console.log('rendering')
  return (
    <>
      <div className="footer-container">
        <Icons className="footer-icons-top" />
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
            <Formik
              initialValues={{ email: '' }}
              validationSchema={NewsletterSchema}
              onSubmit={(value, action) => {
                console.log(value)
                action.resetForm()
              }}
            >
              {({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <Field
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    className="form-input"
                  />
                  <button type="submit">
                    <img src={arrow} alt="Enter" />
                  </button>
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="form-error"
                  />
                </form>
              )}
            </Formik>
          </div>
        </div>
        <div className="footer-tos">
          <p className="h2">Terms of Services</p>
          <p className="h2">Privacy Policy</p>
        </div>
        <Icons className="footer-icons" />
      </div>
    </>
  )
}
export default Footer

export const Icons = ({ className }) => {
  return (
    <div className={className}>
      <FontAwesomeIcon icon={faLinkedinIn} id="icon1" className="icon" />
      <FontAwesomeIcon icon={faFacebookF} id="icon2" className="icon" />
      <FontAwesomeIcon icon={faInstagram} id="icon3" className="icon" />
    </div>
  )
}