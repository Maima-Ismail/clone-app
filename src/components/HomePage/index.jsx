import HomePageSlider from './HomePageSlider/HomePageSlider'
import HomePageProjects from './HomePageProjects/HomePageProjects'
import HomePageServices from './HomePageServices/HomePageServices'
import Footer from '../footer/footer'
import Goal from './Goal/Goal'
import HomeIndustriesSection from './HomeIndustriesSection/HomeIndustriesSection'
const HomePage = () => {
  return (
    <>
      <HomePageSlider />
      <HomePageProjects />
      <HomePageServices />
      <Goal />
      <HomeIndustriesSection/>
      <Footer />
    </>
  )
}
export default HomePage