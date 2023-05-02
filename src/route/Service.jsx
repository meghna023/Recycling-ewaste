import React from "react";
import Navbar from '../components/Navbar'
import Target from '../components/Target'
import Hero from "../components/Hero";
import srvc from "../assets/202.jpg"
import Footer from "../components/Footer";

function Service  () {
    return(
        <>
         <Navbar />
         <Hero
         cName="hero-mid"
         heroImg={srvc}
         btnClass="hide"
     />
         <Target />
         <Footer />
        </>
    );
};
export default Service;