import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import linkedin from "../../../assets/icons/linkedin.svg";
import facebook from "../../../assets/icons/facebook.svg";
import insta from "../../../assets/icons/insta.svg";
import cross from "../../../assets/icons/cross.svg";
import crossBlack from "../../../assets/icons/cross-black.svg";
import menu from "../../../assets/icons/menu.svg";
import menuBlack from "../../../assets/icons/menu-black.svg";
import logo from "../../../assets/icons/logo.png";

const HeaderMobile = ({ isBlackIcon }) => {
  const links = [
    {
      name: "Services",
      href: "/services",
      subLinks: [
        {
          name: "Software Engineering",
          href: "/services",
        },
        {
          name: "Product Development",
          href: "/services",
        },
        {
          name: "Managed IT Services",
          href: "/services",
        },
      ],
    },
    {
      name: "About",
      href: "/",
      subLinks: null,
    },
    {
      name: "Projects",
      href: "/projects",
      subLinks: null,
    },
    {
      name: "Contact Us",
      href: "/contact",
      subLinks: null,
    },
  ];

  const navIcons = [
    {
      name: linkedin,
      alt: "linkedin-icon",
      id: "nav-icon1",
    },
    {
      name: facebook,
      alt: "facebook-icon",
      id: "nav-icon2",
    },
    {
      name: insta,
      alt: "insta-icon",
      id: "nav-icon3",
    },
  ];
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
      <div className="logo">
        <Link to={"/"}>
          <img src={logo} alt="logo" />
          <p className={`logo-text ${isBlackIcon && "logo-black-text"}`}>
            GrolTech
          </p>
        </Link>
      </div>
      <div className={`navbar ${scrolling && "scrolled"}`} ref={navbarRef}>
        <button type="button" onClick={openModal}>
          {isBlackIcon ? (
            <img src={menuBlack} alt="menu-icon" className="menu-icon" />
          ) : scrolling ? (
            <img src={menuBlack} alt="menu-icon" className="menu-icon" />
          ) : (
            <img src={menu} alt="menu-icon" className="menu-icon" />
          )}
        </button>
        <div className={`overlay ${showModal && "open"}`} onClick={closeModal}>
          {" "}
        </div>
        <div>
          <div className={`modal-container-mobile ${showModal && "open"}`}>
            <nav>
              <ul className="nav-links-mobile" onClick={closeModal}>
                {links.map((link, index) => (
                  <li key={index}>
                    <Link to={link.href}>{link.name}</Link>
                  </li>
                ))}
              </ul>
              <div className="nav-icons">
                {navIcons.map((navIcon, index) => (
                  <img
                    key={index}
                    src={navIcon.name}
                    alt={navIcon.alt}
                    id={navIcon.id}
                    className="nav-icon"
                  />
                ))}
              </div>
            </nav>
            <button type="button" onClick={closeModal}>
              <img src={cross} alt="cross-icon" className="cross-icon" />
            </button>
          </div>
          <div className={`modal-container-laptop ${showModal && "open"}`}>
            <nav>
              <ul className="nav-links" onClick={closeModal}>
                {links.map((link, index) => (
                  <li key={index}>
                    <Link to={link.href}>{link.name}</Link>
                    {link.subLinks && (
                      <ul className="services-nav-links">
                        <div className="sleek-line"></div>
                        <div>
                          {link.subLinks.map((subLink, subIndex) => (
                            <li key={subIndex}>
                              <Link to={subLink.href}>{subLink.name}</Link>
                            </li>
                          ))}
                        </div>
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            <button type="button" onClick={closeModal}>
              <img src={crossBlack} alt="cross-icon" className="cross-icon" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderMobile;
