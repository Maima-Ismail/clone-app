import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import logo from "../../../assets/icons/logo.png";

const HeaderLaptop = () => {
  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Services",
      href: "/services",
    },
    {
      name: "Projects",
      href: "/projects",
    },
    {
      name: "Contact Us",
      href: "/contact",
    },
  ];
  const navbarRef = useRef(null);
  const [scrolling, setScrolling] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      scrollTop > 0 && scrollTop <= 50 ? setScrolling(-1) : setScrolling(0);
      if (scrollTop > 100) {
        setScrolling(1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`laptop-navbar ${scrolling === 1 && "laptop-scrolled"}`}
        ref={navbarRef}
      >
        <nav>
          <div className={`laptop-logo  ${scrolling === -1 && "faded-text"}`}>
            <Link to={"/"}>
              <img src={logo} alt="logo" />
              <p
                className={`laptop-logo-text ${
                  scrolling === 1 && "logo-black-text"
                }`}
              >
                GrolTech
              </p>
            </Link>
          </div>
          <ul
            className={`laptop-nav-links ${scrolling === -1 && "faded-text"} ${
              scrolling === 1 && "laptop-black-content"
            }`}
          >
            {links.map((link, index) => (
              <li key={index}>
                <Link to={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default HeaderLaptop;
