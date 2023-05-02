import { Component } from "react";
import green from "../assets/80.png"
import "./Works.css"

class WorksData extends Component {
  render() {
   return (
    <div className={this.props.className}>
    <div className="about-container">
      <h2>{this.props.heading}</h2>
      <p>{this.props.text}</p>
    </div>

   <div className="picture">
   <img alt="pic" src={this.props.img1}/>
     </div>
    </div>
    );
};
}

export default WorksData;