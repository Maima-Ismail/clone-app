import { useState, useEffect } from 'react'
import './HomePageSlider.css'
import '../../Data Files/slides'
import slides from '../../Data Files/slides'
import { Outlet, Link } from 'react-router-dom'
const HomePageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const handleClick = (index) => {
    setCurrentSlide(index)
  }
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
      <div className="navbar">
        <nav>
          <ul className="nav-links">
            <li>
              <Link to={`/`}>Home</Link>
            </li>
            <li>
              <Link to={`/contact`}>Contact Us</Link>
            </li>
            <li>
              <Link to={`/services`}>Services</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="slider-buttons">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slider-button ${
              currentSlide === index ? 'active-button' : ''
            }`}
            onClick={() => {
              handleClick(index)
            }}
          ></div>
        ))}
      </div>
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
