import './contactUs.css'
import ContactPageImage from '../../assets/contactPageImage.png'
import ContactSchema from '../../schemas/contactSchema'
import { Formik, Field, ErrorMessage } from 'formik'
import Footer from '../footer/footer'
const ContactUs = () => {
  return (
    <div>

    <div className="contact-container">
      <div className="contact-image">
        <img src={ContactPageImage} alt="Contact Us" />
        <div className="contact-card"></div>
        <p className="contact-h1">Get in touch</p>
      </div>
      <div className="contact-form">
        <p className="contact-h1">We Happy To Help</p>
        <p className="contact-h2">
          We'd love to hear from you and discuss how we can help bring your
          ideas to life.
        </p>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            company: '',
            message: '',
          }}
          validationSchema={ContactSchema}
          onSubmit={(values, action) => {
            console.log(values)
            action.resetForm()
          }}
        >
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div className="contact-name">
                <Field
                  type="text"
                  placeholder="FIRST NAME*"
                  name="firstName"
                  />
                <Field type="text" placeholder="LAST NAME" name="lastName" />
              </div>
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="contact-form-error"
                  />
              <Field type="email" placeholder="EMAIL ADDRESS*" name="email" />
              <ErrorMessage
                name="email"
                component="div"
                className="contact-form-error"
                />
              <Field type="text" placeholder="COMPANY" name="company" />
              <ErrorMessage
                name="company"
                component="div"
                className="contact-form-error"
              />
              <Field
                as="textarea"
                rows={10}
                placeholder="MESSAGE*"
                name="message"
                />
              <ErrorMessage
                name="message"
                component="div"
                className="contact-form-error"
                />
              <button type="submit">CONNECT</button>
            </form>
          )}
        </Formik>
      </div>
    </div>
<Footer />
        </div>
  )
}
export default ContactUs
