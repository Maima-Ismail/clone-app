import HomePageSlider from './HomePageSlider/HomePageSlider'
import HomePageProjects from './HomePageProjects/HomePageProjects'
import HomePageServices from './HomePageServices/HomePageServices'
import Footer from '../footer/footer'
const HomePage = () => {
  return (
    <>
      <HomePageSlider />
      <HomePageProjects />
      <HomePageServices />
      <Footer />
    </>
  )
}
export default HomePage