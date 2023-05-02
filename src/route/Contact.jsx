import React from "react";
import Navbar from '../components/Navbar'
import ContactForm from '../components/ContactForm'
import MailImg from "../assets/c.jpg"
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function Contact  () {
    return(
        <>
         <Navbar />
         <Hero
        cName="hero-mid"
         heroImg={MailImg}
        btnClass="hide"
         />
        <ContactForm />
        <Footer />
        </>
    );
};
export default Contact;