import "./Target.css"
import TargetData from "./TargetData";
import a from "../assets/a.jpg"
import b from "../assets/b.jpg"
import c from "../assets/c.webp"
import d from "../assets/d.jpg"



function Target(){
  return(
    <div className="sections">
    <h1> Our Services</h1>
    <p>Make our planet greener place to live.</p>
    <div className="sectionscard">
   
    <TargetData 
    image={a}
    heading="Electronic Recycling"
    text="Electronic waste recycling, electronics recycling or e-waste recycling is the disassembly and separation of components and raw materials of waste electronics; when referring to specific types of e-waste, the terms like computer recycling or mobile phone recycling may be used. Like other waste streams, re-use, donation and repair are common sustainable ways to dispose of IT waste."
    />

     <TargetData 
    image={b}
    heading="Data Destruction"
    text="Data destruction is the process of destroying data stored on tapes, hard disks and other forms of electronic media so that it is completely unreadable and cannot be accessed or used for unauthorized purposes. When data is deleted, it is no longer readily accessible by the operating system or application that created it. "
    />

     <TargetData 
    image={c}
    heading="Reverse Logistics"
    text="Reverse logistics refers to the supply chain process of returning products from end users back through the supply chain to either the retailer. Whether the customer is returning items they don't need, the end of the product life cycle has been reached, it's simply good business to offer returns to your customers, and that's where reverse logistics comes into play. "
    />
    <TargetData 
    image={d}
    heading="IT and Electronics Assets Disposition (ITAD)"
    text="IT Asset Disposition is the practice of properly decommissioning and disposing of hardware and electronic devices. While it may seem like disposing of outdated IT equipment is as simple as sending it off to Goodwill. ITAD is critical for ensuring your company’s data is protected and that your end-of-life equipment."
    />
   </div>
  </div>
  );
}
export default Target;