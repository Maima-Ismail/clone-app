import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";

const HeaderLaptop = () => {
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
        className={`laptop-navbar ${scrolling === 1 ? "laptop-scrolled" : ""}`}
        ref={navbarRef}
      >
        <nav>
          <ul
            className={`laptop-nav-links ${
              scrolling === -1 ? "faded-nav-links" : ""
            } ${scrolling === 1 ? "laptop-black-content" : ""}`}
          >
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
        </nav>
      </div>
    </>
  );
};

export default HeaderLaptop;
