import TermsPolicy from "../../components/Terms and Policy";
import HeaderMobile from "../../components/Header/HeaderMobile";
import Footer from "../../components/Footer/Footer";

const PrivacyPolicy = () => {
  const heading = "Privacy Policy";
  const text = `<h4>Effective Date: July 13, 2023</h4>

<p>Groltech ('we,' 'us,' or 'our') is committed to protecting the privacy and personal information of our website visitors. This Privacy Policy outlines how we collect, use, and protect the information we gather through our website.</p>

<h4>1. Information We Collect</h4>

<p>We may collect personal information, such as your name, email address, and phone number, when you voluntarily submit it to us through our website. We may also collect non-personal information, such as your IP address and browsing behavior, using cookies and similar technologies.</p>

<h4>2. Use of Information</h4>

<p>We use the collected information to provide and improve our services, respond to inquiries and requests, personalize your experience on our website, and communicate with you about our products, services, and promotions. We may also use the information for analytical purposes and to comply with legal obligations.</p>

<h4>3. Data Security</h4>

<p>We employ industry-standard security measures to protect the information we collect from unauthorized access, disclosure, alteration, or destruction. However, please be aware that no data transmission over the internet or electronic storage method is 100% secure.</p>

<h4>4. Third-Party Websites</h4>

<p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or the content of those websites. We encourage you to review the privacy policies of those third parties before providing any personal information.</p>

<h4>5. Changes to this Statement</h4>

<p>We reserve the right to update or modify this Privacy Policy at any time. Any changes will be effective immediately upon posting the revised policy on our website. We encourage you to review this Privacy Policy periodically for any updates.</p>

<p>If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at ahmed@groltech.com.</p>

<h5>© 2023, Groltech. All rights reserved.</h5>`;
  return (
    <>
      <HeaderMobile />
      <TermsPolicy heading={heading} text={text} />
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
