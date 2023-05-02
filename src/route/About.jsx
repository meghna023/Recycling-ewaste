import Hero from "../components/Hero";
import React from "react";
import Navbar from '../components/Navbar'
import AboutUs from "../components/AboutUs";
import Works from "../components/Works";
import AboutImg from "../assets/a.jpg"
import Footer from "../components/Footer";

const About =() =>{
    return(
        <>
        <Navbar />
        <Hero
    cName="hero-mid"
    heroImg={AboutImg}
     />
        <Works />
        <AboutUs />
        <Footer />
        </>
    );
};
export default About;