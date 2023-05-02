import Works from "../components/Works";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Target from "../components/Target";
import homeImg from "../assets/85.jpeg"
import Footer from "../components/Footer";
import "./Home.css"

function Home (){
  return(
    <>
    <Navbar />
    <Hero
    cName="hero"
    heroImg={homeImg}
     title="When in doubt, don’t throw it out!"
     text="Our plan is to bring all e-waste producers and users under one umbrella."
     />
    <Works />
    <Target />
    <Footer />
     
 
    </>
  )
}

export default Home;