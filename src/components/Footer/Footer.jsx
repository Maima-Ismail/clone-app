import linkedin from "../../assets/icons/linkedin.svg";
import facebook from "../../assets/icons/facebook.svg";
import insta from "../../assets/icons/insta.svg";
import { Link } from "react-router-dom";
import arrow from "../../assets/arrow-right-white.png";
import { Formik, Field, ErrorMessage } from "formik";
import "./Footer.css";
import { NewsletterSchema } from "../../schemas";
const Footer = () => {
  const footerNavs1 = [
    {
      label: "About us",
      className: "h1",
    },
    {
      label: "Background",
      className: "h2",
    },
    {
      label: "Team",
      className: "h2",
    },
    {
      label: "Contact",
      className: "h2",
    },
  ];

  const footerNavs2 = [
    {
      label: "Services",
      className: "h1",
    },
    {
      label: "Product Development",
      className: "h2",
    },
    {
      label: "Software Engineer",
      className: "h2",
    },
    {
      label: "Managed IT Service",
      className: "h2",
    },
  ];

  return (
    <>
      <div className="footer-container">
        <Icons className="footer-icons-top" />
        <div className="footer-first-div">
          <div className="footer-about">
            {footerNavs1.map((nav, index) => (
              <p className={nav.className} key={index}>
                {nav.label}
              </p>
            ))}
          </div>
          <div className="footer-services">
            {footerNavs2.map((nav, index) => (
              <p className={nav.className} key={index}>
                {nav.label}
              </p>
            ))}
          </div>
        </div>
        <div className="footer-newsletter">
          <p className="newsletter-heading">
            Join our news letter to Know our latest feeds
          </p>
          <div className="newsletter-input">
            <Formik
              initialValues={{ email: "" }}
              validationSchema={NewsletterSchema}
              onSubmit={(value, action) => {
                console.log(value);
                action.resetForm();
              }}
            >
              {({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <Field
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    className="footer-form-input"
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
          <Link to={"/terms-and-conditions"}>
            <p className="h2">Terms and Services</p>
          </Link>
          <Link to={"/privacy-policy"}>
            <p className="h2">Privacy Policy</p>
          </Link>
        </div>
        <Icons className="footer-icons" />
      </div>
    </>
  );
};
export default Footer;

export const Icons = ({ className }) => {
  return (
    <div className={className}>
      <img src={linkedin} alt="linkedin-icon" id="icon1" className="icon" />
      <img src={facebook} alt="facebook-icon" id="icon2" className="icon" />
      <img src={insta} alt="insta-icon" id="icon3" className="icon" />
    </div>
  );
};
