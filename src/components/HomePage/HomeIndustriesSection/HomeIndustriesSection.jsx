import { useState, useEffect, useRef } from 'react';
import './HomeIndustriesSection.css';
import industries from '../../../Data Files/industries';

const HomeIndustriesSection = () => {
    const [currentIndustry, setCurrentIndustry] = useState(0);
    const industryNameRef = useRef(null);
    const industryBarRef = useRef(null);
    const industryContainerRef = useRef(null);
    const intervalRef = useRef(null);

    const handleClick = (index) => {
        setCurrentIndustry(index);

        const clickedIndustryName = industryNameRef.current.querySelector(`.industry-name:nth-child(${index + 1})`);
        const clickedIndustryBar = industryBarRef.current;
        const industryContainer = industryContainerRef.current;

        if (clickedIndustryName && clickedIndustryBar) {
            const { width, left } = clickedIndustryName.getBoundingClientRect();
            const scrollLeft = industryContainer.scrollLeft;
            clickedIndustryBar.style.width = `${width}px`;
            clickedIndustryBar.style.marginLeft = `${left + scrollLeft}px`;
        }
    };

    const handleMouseEnter = () => {
        // Clear the interval when the mouse enters
        clearInterval(intervalRef.current);
    };

    const handleMouseLeave = () => {
        // Restart the interval when the mouse leaves
        intervalRef.current = setInterval(() => {
            setCurrentIndustry((prevIndustry) => (prevIndustry + 1) % industries.length);
        }, 5000);
    };

    useEffect(() => {
        // Start the interval when the component mounts
        intervalRef.current = setInterval(() => {
            setCurrentIndustry((prevIndustry) => (prevIndustry + 1) % industries.length);
        }, 5000);

        // Clear the interval when the component is unmounted
        return () => {
            clearInterval(intervalRef.current);
        };
    }, []);

    useEffect(() => {
        // Set the initial width and margin for the first industry
        const industryName = industryNameRef.current.querySelector(`.industry-name:nth-child(1)`);
        const industryBar = industryBarRef.current;

        if (industryName && industryBar) {
            const { width, left } = industryName.getBoundingClientRect();
            industryBar.style.width = `${width}px`;
            industryBar.style.marginLeft = `${left}px`;
        }
    }, []);

    return (
        <div className='home-industries-section'>
            <p className='industries-heading'>Industries we worked in</p>
            <div
                className='industries-container'
                ref={industryNameRef}
            >
                <div className='industry-name-section' ref={industryContainerRef}>
                    <div className='industry-name-container'>
                        {industries.map((industry, index) => (
                            <div
                                className={`industry-name ${currentIndustry === index ? 'active-industry-name' : ''}`}
                                key={index}
                                onClick={() => {
                                    handleClick(index);
                                }}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                {industry.name}
                            </div>
                        ))}
                    </div>
                    <div className="industry-name-bar" ref={industryBarRef}></div>
                </div>
                <div className='break-industries-section'></div>
                <div className='industry-slide-container'>
                    {industries.map((industry, index) => (
                        <div
                            className={`industry-slide ${currentIndustry === index ? 'active-industry' : ''}`}
                            key={index}
                        >
                            <img src={industry.image.src} alt={industry.image.alt} className='industry-image' />
                            <div className='industry-description-bg'>
                                <p className='industry-description'>{industry.description}</p>
                            </div>
                        </div>
                    ))}
                    <div className='industries-white-div'></div>
                </div>
            </div>
        </div>
    );
};

export default HomeIndustriesSection;
