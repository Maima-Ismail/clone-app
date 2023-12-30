import React, { useEffect, useRef, useState } from "react";
import ServiceHeader from "../../components/Services/ServiceHeader/ServiceHeader";
import ServiceSlides from "../../components/Services/ServiceSlides/serviceSlides";
import "./index.css";
import Footer from "../../components/Footer/Footer";
import HeaderMobile from "../../components/Header/HeaderMobile";

const Services = () => {
  const innerScrollbarRef = useRef(null);
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const hiddenDiv = document.querySelector(".hidden-div");
      const serviceSlides = document.querySelector(".service-slides");
      const servicesFooter = document.querySelector(".services-footer");
      const totalHeight =
        hiddenDiv.clientHeight +
        serviceSlides.clientHeight +
        servicesFooter.clientHeight;
      const scrollTop = window.scrollY;
      const scrollPercentage =
        ((scrollTop - window.innerHeight) / totalHeight) * 100;
      scrollTop >= window.innerHeight
        ? (setSticky(true),
          (innerScrollbarRef.current.style.height = `${scrollPercentage}%`))
        : (innerScrollbarRef.current.style.height = `${0}%`);
      scrollTop < window.innerHeight && setSticky(false);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="services">
      <HeaderMobile />
      <ServiceHeader />
      <div className="services-container">
        <div className="hidden-div"></div>
        <div className="service-slides">
          <div className={`services-scrollbar ${sticky && "sticky-scrollbar"}`}>
            <div className="inner-scrollbar" ref={innerScrollbarRef}></div>
          </div>
          <ServiceSlides />
        </div>
        <div className="services-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Services;
