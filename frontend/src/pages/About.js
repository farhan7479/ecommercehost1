import React from "react";
import Layout from "./../components/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommerce app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
        <div className="about-us">
      <h1>About FS Developer Company</h1>
      <p>
        FS Developer Company is a leading e-commerce platform that specializes in providing high-quality products to customers worldwide. With a passion for technology and innovation, we strive to deliver exceptional shopping experiences and meet the diverse needs of our customers.
      </p>
      <p>
        Our mission is to offer a wide range of products across various categories, including electronics, fashion, home goods, and more. We source our products from trusted manufacturers and suppliers to ensure the utmost quality and value for our customers.
      </p>
      <p>
        At FS Developer Company, customer satisfaction is our top priority. We are committed to providing excellent customer service, secure and convenient shopping, and timely product delivery. Our dedicated team of professionals is always ready to assist you with any inquiries or concerns you may have.
      </p>
      <p>
        As a socially responsible company, we are committed to sustainability and environmental stewardship. We strive to minimize our ecological footprint by promoting eco-friendly products and packaging practices. By choosing FS Developer Company, you are not only getting quality products but also contributing to a greener future.
      </p>
      <p>
        We value the trust and loyalty of our customers and continuously work towards enhancing their shopping experience. With our user-friendly website, secure payment options, and hassle-free returns, we aim to make your online shopping experience seamless and enjoyable.
      </p>
      <p>
        Thank you for choosing FS Developer Company as your preferred e-commerce destination. We look forward to serving you and exceeding your expectations. Shop with us today and discover a world of quality products and exceptional customer service.
      </p>
    </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;