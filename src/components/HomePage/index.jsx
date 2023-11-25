import HomePageSlider from './HomePageSlider/HomePageSlider'
import HomePageProjects from './HomePageProjects/HomePageProjects'
import HomePageServices from './HomePageServices/HomePageServices'
import Footer from '../footer/footer'
import Goal from './Goal.jsx/Goal'
const HomePage = () => {
  return (
    <>
      <HomePageSlider />
      <HomePageProjects />
      <HomePageServices />
      <Goal />
      <Footer />
    </>
  )
}
export default HomePage