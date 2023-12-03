import { useState, useEffect, useRef } from 'react';
import './HomeIndustriesSection.css';
import industries from '../../../Data Files/industries';

const HomeIndustriesSection = () => {
    const [currentIndustry, setCurrentIndustry] = useState(0);
    const [direction, setDirection] = useState(1); // 1 for left-to-right, -1 for right-to-left
    const industryNameRef = useRef(null);
    const industryBarRef = useRef(null);

    const handleClick = (index) => {
        const newDirection = index > currentIndustry ? 1 : -1;
        setDirection(newDirection);
        setCurrentIndustry(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const newDirection = (direction === 1 && currentIndustry === industries.length - 1) ? -1 : direction;
            setCurrentIndustry((prevIndustry) => (prevIndustry + newDirection) % industries.length);
            setDirection(newDirection);
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, [currentIndustry, direction]);

    useEffect(() => {
        const activeIndustryName = industryNameRef.current.querySelector('.active-industry-name');
        const industryNameBar = industryBarRef.current;

        if (activeIndustryName && industryNameBar) {
            const { width, left } = activeIndustryName.getBoundingClientRect()
            industryNameBar.style.width = `${width}px`;
            industryNameBar.style.left = `${left}px`;
        }
    }, [currentIndustry]);

    return (
        <div className='home-industries-section'>
            <p className='industries-heading'>Industries we worked in</p>
            <div className='industries-container' ref={industryNameRef}>
                <div className='industry-name-container'>
                    {industries.map((industry, index) => (
                        <div
                            className={`industry-name ${currentIndustry === index ? 'active-industry-name' : ''}`}
                            key={index}
                            onClick={() => {
                                handleClick(index);
                            }}
                        >
                            {industry.name}
                        </div>
                    ))}
                </div>
                <div className="industry-name-bar" ref={industryBarRef}></div>
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
