import React from "react";

const AboutUs = () => {
  const containerStyle = {
    maxWidth: "600px",
    margin: "50px auto",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
    textAlign: "center",
  };

  const headingStyle = {
    marginBottom: "20px",
  };

  const textStyle = {
    lineHeight: "1.6",
    color: "#555",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>About Us</h2>
      <p style={textStyle}>
        Welcome to our company! We are dedicated to providing the best services to our customers.
        Our team works hard to bring you high-quality products and outstanding customer support.
      </p>
      <p style={textStyle}>
        Our mission is to innovate and create solutions that make a difference in people's lives.
        Thank you for choosing us!
      </p>
          </div>
  );
};

export default AboutUs;
