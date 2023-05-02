import ef from "../assets/51.jpg"
import gh from "../assets/60.jpg"
import ab from "../assets/69.jpg"
import cd from "../assets/71.jpg"
import AboutUsData from "./AboutUsData";
import "./AboutUs.css"

const AboutUs = () => {
  return(
    <div className="growth">
    <h1>One step closer to sustainable world.</h1>
    <p>The most sustainable worls starts with us, one gadget at a time.</p>
    

    <AboutUsData
    className="first-des"
    heading="Our Mission"

    text="Remine Management believes in three principles: reduce, reuse and recycle. Our goal is to create awareness around the need for responsible eWaste disposal in India. While many people know about electronics recycling, we are committed to the task of creating an enabling environment for informal recyclers by providing them with training on disposal techniques and safe practices."
    img1={ef}
    img2={gh}
    />
    <AboutUsData
    className="first-des-reverse"
    heading="Our Vision"

    text="We are committed to using our expertise, resources and experience to build a sustainable future for the planet. We believe that e-waste is one of the most important issues to tackle in order to protect our environment and our way of life. We have reached a point where we have become aware of the damage caused by e-waste and are committed to making difference. "
    img1={ab}
    img2={cd}
    />
    </div>
    );
  };
  export default AboutUs;