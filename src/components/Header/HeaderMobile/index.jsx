import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderMobile = ({ isBlackIcon }) => {
  const navbarRef = useRef(null);
  const [scrolling, setScrolling] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
    document.body.classList.add("modal-open");
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.classList.remove("modal-open");
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolling(scrollTop > 100);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`navbar ${scrolling ? "scrolled" : ""}`} ref={navbarRef}>
        <button type="button" onClick={openModal}>
          <FontAwesomeIcon
            icon={faBars}
            className={`bars-icon ${scrolling ? "black-icon" : ""} ${
              isBlackIcon ? "black-icon" : ""
            }`}
          />
        </button>
        <div
          className={`overlay ${showModal ? "open" : ""}`}
          onClick={closeModal}
        >
          {" "}
        </div>
        <div>
          <div className={`modal-container-mobile ${showModal ? "open" : ""}`}>
            <nav>
              <ul className="nav-links-mobile" onClick={closeModal}>
                <li>
                  <Link to={`/`}>Home</Link>
                </li>
                <li>
                  <Link to={`/services`}>Services</Link>
                </li>
                <li>
                  <Link to={`/projects`}>Projects</Link>
                </li>
                <li>
                  <Link to={`/contact`}>Contact Us</Link>
                </li>
              </ul>
              <div className="nav-icons">
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  id="nav-icon1"
                  className="nav-icon"
                />
                <FontAwesomeIcon
                  icon={faFacebookF}
                  id="nav-icon2"
                  className="nav-icon"
                />
                <FontAwesomeIcon
                  icon={faInstagram}
                  id="nav-icon3"
                  className="nav-icon"
                />
              </div>
            </nav>
            <button type="button" onClick={closeModal}>
              <FontAwesomeIcon icon={faXmark} className="x-icon-mobile" />
            </button>
          </div>
          <div className={`modal-container-laptop ${showModal ? "open" : ""}`}>
            <nav>
              <ul className="nav-links" onClick={closeModal}>
                <li>
                  <Link to={`/services`}>Services</Link>
                  <div className="sleek-line"></div>
                  <ul className="services-nav-links">
                    <li>
                      <Link to={`/services`}>Software Engineering</Link>
                    </li>
                    <li>
                      <Link to={`/services`}>Product Development</Link>
                    </li>
                    <li>
                      <Link to={`/services`}>Managed IT Services</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to={`/`}>About</Link>
                </li>
                <li>
                  <Link to={`/projects`}>Projects</Link>
                </li>
                <li>
                  <Link to={`/contact`}>Contact</Link>
                </li>
              </ul>
            </nav>
            <button type="button" onClick={closeModal}>
              <FontAwesomeIcon icon={faXmark} className="x-icon" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderMobile;
