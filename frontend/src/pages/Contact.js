import React from "react";
import Layout from "./../components/Layout";
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "../styles/ContactStyle.css";

const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="contact">
      <h1>Contact Us</h1>

      <div className="contact-info">
        <div className="contact-item">
          <i className="fas fa-map-marker-alt"></i>
          <p>New Delhi India-110025</p>
        </div>

        <div className="contact-item">
          <i className="fas fa-phone"></i>
          <p>+91 7479453902</p>
        </div>

        <div className="contact-item">
          <i className="fas fa-envelope"></i>
          <p><a href="mailto:shahid957farhan@gmail.com">shahid957farhan@gmail.com.com</a></p>
        </div>
      </div>
    </div>
    <p className="contact-message">
        Feel free to contact us if you have any questions or need assistance. Our team of professionals is ready to help you.
      </p>

      <div className="contact-social">
        <p>Connect with us:</p>
        <div className="social-icons">
          
          <Link to="https://twitter.com/FarhanS78081217">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link to="https://instagram.com/the.farhanshahid">
            <i className="fab fa-instagram"></i>
          </Link>
          <Link to="https://linkdin.com/in/farhan-shahid-709baa248">
            <i className="fab fa-linkedin-in"></i>
          </Link>
        </div>
      </div>

    </Layout>
  );
};

export default Contact;