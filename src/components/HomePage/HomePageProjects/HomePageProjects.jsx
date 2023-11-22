import './HomePageProjects.css'
import Image1 from '../../../assets/dds-dashboard-2.png'
import Image2 from '../../../assets/addlintercis2.png'
import Image3 from '../../../assets/basilhaydens.png'
const HomePageProjects = () => {
  return (
    <div className="home-project-container">
      <p className="home-project-heading">Projects: Notable Client Portfolio</p>
      <p className="home-project-text">
        Empower. Elevate. Experience. We transform your digital journey,
        empowering your brand, elevating user experiences, and delivering
        exceptional results. Discover our collaborations with forward-thinking
        clients who entrust us to redefine their online presence, innovate with
        purpose, and achieve extraordinary growth.
      </p>
      <div className="home-project-images">
        <div className="home-project-column1">
          <div className="project-image1">
            <img src={Image1} alt="Image1" />
            <p className="image1-text">
              We partenered with DDS to help in creating a software suite for
              business management based on Ron Hubbard Management System.
            </p>
            <button>Learn more</button>
          </div>
          <div className="project-image2">
            <img src={Image2} alt="Image2" />
            <p className="image2-text">
              We crafted a stunning website, capturing the artistry and vision
              of a talented photographer through a dynamic portfolio, showcasing
              captivating portraits, breathtaking landscapes, and mesmerizing
              moments in motion.
            </p>
            <button>Learn more</button>
          </div>
        </div>
        <div className="home-project-column2">
          <div className="project-image3">
            <img src={Image3} alt="Image3" />
            <p className="image3-text">
              We crafted an immersive mobile experience for Basil Haydens,
              bringing their exquisite wines and cocktails to life, allowing
              seamless reservations for their exclusive events and tastings.
            </p>
            <button>Learn more</button>
          </div>
          <div className="project-image4">
            <p className="image4-text">
              Experience the transformative power of collaboration and position
              your company for unprecedented success. Join our ranks and become
              the next in line to unlock your true potential.
            </p>
            <button>Contact Us</button>
          </div>
          <div className="project-image5"></div>
        </div>
      </div>
    </div>
  )
}
export default HomePageProjects