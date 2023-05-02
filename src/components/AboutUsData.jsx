import ef from "../assets/51.jpg"
import gh from "../assets/60.jpg"
import { Component } from "react";
import "./AboutUs.css"

class AboutUsData extends Component {
  render() {
   return (
      <div className={this.props.className}>
    <div className="des-text">
      <h2>{this.props.heading}</h2>
      <p>{this.props.text}</p>
    </div>

   <div className="image">
   <img alt="img" src={this.props.img1}/>
   <img alt="img" src={this.props.img2}/>
     </div>
    </div>
   );
  };
}

export default AboutUsData;