import { useState, useEffect, useRef } from 'react';
import './HomeIndustriesSection.css';
import industries from '../../../Data Files/industries';

const HomeIndustriesSection = () => {
    const [currentIndustry, setCurrentIndustry] = useState(0);
    const [isBarVisible, setBarVisibility] = useState(true);
    const [scrollPosition, setScrollPosition] = useState(0);
    const industryContainerRef = useRef(null);
    const industryNameRef = useRef(null);
    const industryBarRef = useRef(null);

    const handleClick = (index) => {
        setCurrentIndustry(index);
        setBarVisibility(true);
    };

    const handleScroll = () => {
        const containerScrollPosition = industryContainerRef.current.scrollLeft;
        const activeIndustryName = industryNameRef.current.querySelector('.active-industry-name');
        const industryNameBar = industryBarRef.current;

        if (activeIndustryName && industryNameBar) {
            const { left } = activeIndustryName.getBoundingClientRect();
            const scrollDelta = containerScrollPosition - scrollPosition;
            industryNameBar.style.left = `${left + scrollDelta}px`;
            setScrollPosition(scrollDelta);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndustry((prevIndustry) => (prevIndustry + 1) % industries.length);
            setBarVisibility(false);
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, [currentIndustry]);

    useEffect(() => {
        if (isBarVisible) {
            const activeIndustryName = industryNameRef.current.querySelector('.active-industry-name');
            const industryNameBar = industryBarRef.current;

            if (activeIndustryName && industryNameBar) {
                const { width, left } = activeIndustryName.getBoundingClientRect();
                industryNameBar.style.width = `${width}px`;
                industryNameBar.style.left = `${left}px`;
            }
        }
    }, [currentIndustry, isBarVisible, scrollPosition]);

    useEffect(() => {
        setBarVisibility(true);
        setScrollPosition(0);
        const firstIndustryName = industryNameRef.current.querySelector('.industry-name');
        const industryNameBar = industryBarRef.current;

        if (firstIndustryName && industryNameBar) {
            const { left } = firstIndustryName.getBoundingClientRect();
            console.log(left)
            industryNameBar.style.left = `${left}px`;}
    }, []);

    useEffect(() => {
        const handleScrollEvent = () => {
            handleScroll();
        };

        const industryNameContainer = industryContainerRef.current;
        industryNameContainer.addEventListener('scroll', handleScrollEvent);

        return () => {
            industryNameContainer.removeEventListener('scroll', handleScrollEvent);
        };
    }, []);


    return (
        <div className='home-industries-section'>
            <p className='industries-heading'>Industries we worked in</p>
            <div
                className='industries-container'
                ref={industryNameRef}
            >
                <div className='industry-name-container' ref={industryContainerRef}>
                    {industries.map((industry, index) => (
                        <div
                            className={`industry-name ${currentIndustry === index ? 'active-industry-name' : ''}`}
                            key={index}
                            onClick={() => {
                                handleClick(index);
                            }}
                        >
                            {industry.name}
                            <div className='industry-name-bar' ref={industryBarRef}></div>
                        </div>
                    ))}
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
