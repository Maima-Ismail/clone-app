import TermsPolicy from "../../components/Terms and Policy";
import HeaderMobile from "../../components/Header/HeaderMobile";
import Footer from "../../components/Footer/Footer";
const TermsServices = () => {
  const heading = "Terms and Conditions";
  const text = `<p>Please read these Terms and Conditions carefully before using our website. By accessing or using the website of Groltech (referred to as 'the Company,' 'we,' 'us,' or 'our'), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these Terms and Conditions, you may not access the website.</p>

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
  return (
    <>
      <HeaderMobile />
      <TermsPolicy heading={heading} text={text} />
      <Footer />
    </>
  );
};
export default TermsServices;
