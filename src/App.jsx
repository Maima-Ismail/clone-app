import './App.css'
import HomePageSlider from './components/HomePage.jsx/HomePageSlider'
import ContactUs from './components/contactUs/contactUs'
import Services from './components/services'
import Footer from './components/footer/footer'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const router = createBrowserRouter([
  { path: '/', element: <HomePageSlider /> },
  {
    path: '/contact',
    element: <ContactUs />,
  },
  {
    path: '/services',
    element: <Services />,
  },
])
function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  )
}

export default App
