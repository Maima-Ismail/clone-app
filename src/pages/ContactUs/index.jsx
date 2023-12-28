import { useEffect, useState } from "react";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import HeaderMobile from "../../components/Header/HeaderMobile";
const ContactUs = () => {
  const [isHeaderWhite, setHeaderWhite] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      setHeaderWhite(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <>
      {isHeaderWhite ? <HeaderMobile /> : <HeaderMobile isBlackIcon={true} />}
      <Contact />
      <Footer />
    </>
  );
};

export default ContactUs;
