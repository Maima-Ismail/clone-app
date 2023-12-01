import { useState, useEffect } from 'react'
import './HomeIndustriesSection.css'
import industries from '../../../Data Files/industries'
const HomeIndustriesSection = () => {
    const [currentIndustry, setCurrentIndustry] = useState(0)
    const handleClick = (index) => {
        setCurrentIndustry(index)
    }
    useEffect(() => {
        const interval = setInterval(()=>{
            setCurrentIndustry( (prevIndustry) => (prevIndustry + 1) % industries)
        }, 5000)
        return () =>{
            clearInterval(interval)
        }
    }, [currentIndustry])
    return(
        <div className='home-industries-section'>
            <p className='industries-heading'>Industries we worked in</p>
            <div className='industries-container'>
                <div className='industry-name-container'>
            {industries.map((industry,index)=>(
                <div className={`industry-name ${currentIndustry === index ? 'active-industry-name' : ''}`}
                key={index}
                onClick={()=>{
                    handleClick(index)
                }}
                >
                    {industry.name}
                </div>
            ))}
                </div>
            <div className='industry-slide-container'>
            {industries.map((industry,index)=>(
                <div className={`industry-slide ${currentIndustry === index ? 'active-industry' : ''}`}
                key={index}
                >
                    <img src={industry.image.src} alt={industry.image.alt}/>
                    <div className='industry-description-bg'>
                        <p>{industry.description}</p>
                    </div>
                </div>
            ))}
            </div>
            </div>
        </div>

    )
}
export default HomeIndustriesSection