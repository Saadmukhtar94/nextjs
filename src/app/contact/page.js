import React from "react";
import Link from "next/link";

const ContactUs = () => {
  const containerStyle = {
    maxWidth: "600px",
    margin: "50px auto",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle} className="container">
      
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Contact Us</h2>
      <form>
        <label>Name</label>
        <input type="text" style={inputStyle} placeholder="Enter your name" required />
        <label>Email</label>
        <input type="email" style={inputStyle} placeholder="Enter your email" required />
        <label>Message</label>
        <textarea style={inputStyle} rows="4" placeholder="Enter your message" required></textarea>
        <button type="submit"  className="btn btn-success w-100">Submit</button>
      </form>
     
    </div>
  );
};

export default ContactUs;
