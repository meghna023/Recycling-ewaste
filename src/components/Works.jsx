import "./Works.css";
import about from "../route/About"
import green from "../assets/80.png"
import WorksData from "./WorksData";

function Works (){
  return(
<div className="about-container">
<h2>What we do?</h2>
<WorksData
  className="first-head"
  text="Remine is a sustainable and cost-effective company for disposing electronic waste and lithium batteries across the country. We provide comprehensive recycling services for getting rid of eWaste efficiently and in environment friendly way and that makes our facility one of the most sustainable in the country with zero waste discharge technology. Our team is committed to providing you with reliable, affordable and sustainable solutions for managing your EEE waste."
  img1={green}/>
  </div>
  )
}
export default Works