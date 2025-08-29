import React from "react";
import Contact from "../Contact/Contact.jsx";
import Footer from "../footer/Footer.jsx";
import Navbar from "../Navbar/Navbar.jsx";

const ContactPage = () => {
  return (
    <>
        <Navbar/>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9851773395976!2d3.715749979019165!3d6.892375859110865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bd81639e54ec3%3A0x9129b4a8c8367e52!2sBabcock%20University%20Ilishan%20Remo!5e0!3m2!1sen!2sng!4v1746201467279!5m2!1sen!2sng"
        style={{ border: "0" , height : 400 , width : "100%" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <Contact />
      <Footer/>
    </>
  );
};

export default ContactPage;