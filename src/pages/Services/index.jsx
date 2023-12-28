import React, { useEffect, useRef, useState } from "react";
import ServiceHeader from "../../components/Services/ServiceHeader/ServiceHeader";
import ServiceSlides from "../../components/Services/ServiceSlides/serviceSlides";
import "./index.css";
import Footer from "../../components/Footer/Footer";
import HeaderMobile from "../../components/Header/HeaderMobile";

const Services = () => {
  const scrollbarRef = useRef(null);
  const innerScrollbarRef = useRef(null);
  const [scrollbarColor, setScrollbarColor] = useState("transparent");

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
      scrollbarRef.current.style.height = `${window.innerHeight}px`;
      scrollTop >= window.innerHeight
        ? (innerScrollbarRef.current.style.height = `${scrollPercentage}%`)
        : (innerScrollbarRef.current.style.height = `${0}%`);
    };

    const updateScrollbarColor = () => {
      const serviceSlides = document.querySelector(".service-slides");
      const scrollTop = window.scrollY;
      const serviceSlidesTop = serviceSlides.offsetTop;
      const scrollbarColor =
        scrollTop >= serviceSlidesTop ? "white" : "transparent";

      setScrollbarColor(scrollbarColor);
    };

    window.addEventListener("scroll", () => {
      handleScroll();
      updateScrollbarColor();
    });

    window.addEventListener("resize", () => {
      handleScroll();
      updateScrollbarColor();
    });

    handleScroll();
    updateScrollbarColor();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateScrollbarColor);
    };
  }, []);

  return (
    <div className="services">
      <HeaderMobile />
      <ServiceHeader />
      <div className="services-container">
        <div
          className="services-scrollbar"
          ref={scrollbarRef}
          style={{ backgroundColor: scrollbarColor }}
        >
          <div className="inner-scrollbar" ref={innerScrollbarRef}></div>
        </div>
        <div className="hidden-div"></div>
        <div className="service-slides">
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
