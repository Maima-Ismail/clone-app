import "./Contact.css";
import { ClipLoader } from "react-spinners";
import ContactPageImage from "../../assets/contactPageImage.png";
import ContactSchema from "../../schemas/ContactSchema";
import { Formik, Field, ErrorMessage } from "formik";
import { useState } from "react";
const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };
  const postData = async (values, action) => {
    setLoading(true);
    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
    console.log(values);
    action.resetForm();
    setLoading(false);
    setShowModal(true);
  };

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
              firstName: "",
              lastName: "",
              email: "",
              company: "",
              message: "",
            }}
            validationSchema={ContactSchema}
            onSubmit={(values, action) => {
              postData(values, action);
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
                <div className="button-area">
                  {loading ? (
                    <ClipLoader
                      color="#021903"
                      size={40}
                      className="clip-loader"
                    />
                  ) : (
                    <button type="submit">Connect</button>
                  )}
                </div>
              </form>
            )}
          </Formik>
        </div>
        <div
          className={`thanks-container ${showModal && "open-thanks-div"}`}
          onClick={closeModal}
        >
          <div className="thanks-div">
            <p className="thanks-heading">Thank you for reaching out to us!</p>
            <p className="thanks-text">
              Your message has been successfully submitted. We appreciate your
              interest and will get back to you as soon as possible.
            </p>
            <button type="button" onClick={closeModal}>
              Got it
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
