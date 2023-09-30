import './contactUs.css'
import ContactPageImage from '../../assets/ContactPageImage.png'
const ContactUs = () => {
  return (
    <div className="contact-container">
      <img src={ContactPageImage} alt="Contact Us" />
      <div className="contact-form">
        <p className="contact-h1">We Happy To Help</p>
        <p className="contact-h2">
          We'd love to hear from you and discuss how we can help bring your
          ideas to life.
        </p>
        <form>
          <div className="contact-name">
            <input
              type="text"
              placeholder="FIRST NAME"
              name="firstName"
              required
            />
            <input type="text" placeholder="LAST NAME" name="lastName" />
          </div>
          <input
            type="email"
            placeholder="EMAIL ADDRESS"
            name="email"
            required
          />
          <input type="text" placeholder="COMPANY" name="company" />
          <textarea
            rows={10}
            type="text"
            placeholder="MESSAGE"
            name="message"
            required
          />
          <button type="submit">CONNECT</button>
        </form>
      </div>
    </div>
  )
}
export default ContactUs
