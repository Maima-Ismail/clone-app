import React, { useEffect, useRef } from 'react';
import ServiceHeader from './serviceHeader/serviceHeader';
import ServiceSlides from './serviceSlides/serviceSlides';
import './index.css';
import Footer from '../footer/footer';

const Services = () => {
  const scrollbarRef = useRef(null);
  const innerScrollbarRef = useRef(null);
  
  useEffect(() => {
    
    const hiddenDiv = document.querySelector('.hidden-div');
    const serviceSlides = document.querySelector('.service-slides');
    const servicesFooter = document.querySelector('.services-footer');

    if (hiddenDiv && serviceSlides && servicesFooter) {
        const height = serviceSlides.clientHeight;
        const top = hiddenDiv.clientHeight;
        scrollbarRef.current.style.height = `${height}px`;
        scrollbarRef.current.style.top = `${top + 1}px`;
      }
    }, []);
    
    useEffect(() => {
    const handleScroll = () => {
      const hiddenDiv = document.querySelector('.hidden-div');
      const serviceSlides = document.querySelector('.service-slides');
      const servicesFooter = document.querySelector('.services-footer');
      const totalHeight = hiddenDiv.clientHeight + serviceSlides.clientHeight + servicesFooter.clientHeight;
      const scrollTop = window.scrollY;
      const scrollPercentage = (scrollTop / (totalHeight - window.innerHeight)) * 100;
      innerScrollbarRef.current.style.height = `${scrollPercentage}%`;
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  },[])

  return (
    <div className="services">
      <ServiceHeader />
      <div className="services-container">
        <div className='services-scrollbar' ref={scrollbarRef}>
        <div className='inner-scrollbar' ref={innerScrollbarRef}></div>
        </div>
        <div className="hidden-div"></div>
        <div className='service-slides'>
          <ServiceSlides />
        </div>
        <div className='services-footer'>
          <Footer/>
        </div>
      </div>
    </div>
  );
};

export default Services;
