import { useState, useEffect } from 'react'
import './HomePageSlider.css'
import '../../Data Files/slides'
import slides from '../../Data Files/slides'
const HomePageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 5000)
    return () => {
      clearInterval(interval)
    }
  }, [currentSlide])
  return (
    <div className="Home-slider-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slider${index + 1} ${
            currentSlide === index ? 'active' : ''
          }`}
        >
          <img src={slide.image.src} alt={slide.image.alt} />
          <div className={`slider${index + 1}-content`}>
            <p className="slider-h1">{slide.content.title}</p>
            <p className="slider-h2">{slide.content.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
export default HomePageSlider
