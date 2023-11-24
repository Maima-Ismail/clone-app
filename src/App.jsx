import './App.css'
import HomePage from './components/HomePage/index'
import ContactUs from './components/contactUs/contactUs'
import Services from './components/services'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const router = createBrowserRouter([
  { path: '/', element: <HomePage/> },
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
    </>
  )
}

export default App
