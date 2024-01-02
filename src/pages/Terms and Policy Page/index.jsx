import TermsPolicy from "../../components/Terms and Policy";
import HeaderMobile from "../../components/Header/HeaderMobile";
import Footer from "../../components/Footer/Footer";
import { useLocation } from "react-router";
const TermsPolicyPage = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const propsValues = {
    heading: "",
    text: "",
  };

  if (pathname === "/terms-and-conditions") {
    propsValues.heading = "Terms and Conditions";
    propsValues.text = `<p>Please read these Terms and Conditions carefully before using our website. By accessing or using the website of Groltech (referred to as 'the Company,' 'we,' 'us,' or 'our'), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these Terms and Conditions, you may not access the website.</p>

<h4>1. Intellectual Property Rights</h4>

<p>All content on our website, including text, graphics, logos, images, audio clips, video clips, and software, is the property of Groltech or its licensors and is protected by copyright laws and other intellectual property rights. You may not use, reproduce, distribute, modify, or transmit any content from the website without our prior written consent.</p>

<h4> 2. Use of the Website</h4>

<p>You agree to use our website for lawful purposes and in a manner consistent with these Terms and Conditions. You may not use the website in any way that could damage, disable, overburden, or impair our servers or networks. You are responsible for ensuring that your use of the website complies with applicable laws and regulations.</p>

<h4>3. Privacy Policy</h4>

<p>Our Privacy Policy governs the collection, use, and disclosure of personal information that you provide to us. By using our website, you consent to the collection, use, and disclosure of your personal information as described in our Privacy Policy.</p>

<h4>4. Disclaimer of Warranties</h4>

<p>While we strive to provide accurate and up-to-date information on our website, we make no warranties or representations regarding the accuracy, reliability, or completeness of the content. We disclaim any liability for any errors or omissions in the content of the website.</p>

<h4>5. Limitation of Liability</h4>

<p>In no event shall Groltech or its directors, employees, or affiliates be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your use of the website or the content provided therein. This includes any loss of data, loss of profits, or business interruption.</p>

<h4>6. Third-Party Links</h4>

<p>Our website may contain links to third-party websites that are not owned or controlled by Groltech. We are not responsible for the content, privacy policies, or practices of any third-party websites. Your use of such websites is at your own risk.</p>

<h4>7. Modifications to the Terms and Conditions</h4>

<p>We reserve the right to modify or update these Terms and Conditions at any time without prior notice. By continuing to use the website after any modifications, you agree to be bound by the revised Terms and Conditions.</p>

<h4>8. Governing Law and Jurisdiction</h4>

<p>These Terms and Conditions shall be governed by and construed in accordance with the laws of the state of New York, United States, without regard to its conflict of law principles. Any legal action or proceeding arising out of or relating to these Terms and Conditions shall be exclusively brought in the state or federal courts located in New York County, New York.</p>

If you have any questions or concerns about these Terms and Conditions, please contact us at ahmed@groltech.com</p>
<h5>© 2023, Groltech. All rights reserved.</h5>


`;
  } else if (pathname === "/privacy-policy") {
    propsValues.heading = "Privacy Policy";
    propsValues.text = `<h4>Effective Date: July 13, 2023</h4>

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
  }
  return (
    <>
      <HeaderMobile />
      <TermsPolicy propsValues={propsValues} />
      <Footer />
    </>
  );
};
export default TermsPolicyPage;
