import "./App.css";
import Home from "./pages/Home/index";
import Projects from "./pages/Projects/index";
import ContactUs from "./pages/ContactUs/index";
import Services from "./pages/Services";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TermsServices from "./pages/Terms and Services";
import PrivacyPolicy from "./pages/Privacy Policy";
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "/contact",
    element: <ContactUs />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/terms-and-conditions",
    element: <TermsServices />,
  },
  {
    path: "privacy-policy",
    element: <PrivacyPolicy />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
