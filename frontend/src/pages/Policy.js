import React from "react";
import Layout from "./../components/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="privacy-policy">
      <h1>Privacy Policy</h1>

      <div className="privacy-policy-content">
        <h2>Information We Collect</h2>
        <p>
          We may collect the following types of personal information when you interact with our website:
        </p>
        <ul>
          <li>Name: We may collect your name when you provide it to us for account registration or other purposes.</li>
          <li>Email Address: We may collect your email address when you sign up for our newsletter, create an account, or contact us.</li>
          <li>Contact Information: We may collect your phone number or address when you provide it to us for shipping or contact purposes.</li>
          <li>Usage Data: We may collect information about your interaction with our website, such as pages visited, links clicked, and actions taken.</li>
        </ul>

        <h2>Use of Information</h2>
        <p>
          We use the collected personal information for the following purposes:
        </p>
        <ul>
          <li>To provide and personalize our services to you.</li>
          <li>To communicate with you, respond to your inquiries, and provide customer support.</li>
          <li>To send you marketing and promotional materials, with your consent.</li>
          <li>To improve our website and services and enhance the user experience.</li>
          <li>To detect and prevent fraud, unauthorized access, or illegal activities.</li>
        </ul>

        <h2>Data Protection and Security</h2>
        <p>
          We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee the absolute security of your information.
        </p>

        <h2>Sharing of Information</h2>
        <p>
          We may share your personal information with third parties in the following situations:
        </p>
        <ul>
          <li>With your consent: We may share your information with third parties if you have given us consent to do so.</li>
          <li>Service Providers: We may engage third-party service providers to perform certain functions on our behalf, such as payment processing, data analysis, or marketing services. These service providers will have access to your personal information as necessary to perform their functions but are obligated to maintain the confidentiality and security of the data.</li>
          <li>Legal Requirements: We may disclose your personal information if required to do so by law or in response to valid legal requests, such as court orders, subpoenas, or legal processes.</li>
        </ul>

        <h2>Your Rights</h2>
        <p>
          You have certain rights regarding your personal information, including the right to access, update, or delete your information. If you would like to exercise any of these rights or have any questions or concerns about our Privacy Policy, please contact us using the information provided at the end of this policy.
        </p>

        <h2>Changes to this Privacy Policy</h2>
        <p>
          We reserve the right to modify this Privacy Policy at any time. Any changes will be effective immediately upon posting of the updated policy. We encourage you to review this Privacy Policy periodically to stay informed about our data practices.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions, concerns, or requests regarding this Privacy Policy or the privacy of your personal information, please contact us at:
        </p>
      </div>
    </div>
  

      </div>
    </Layout>
  );
};

export default Policy;