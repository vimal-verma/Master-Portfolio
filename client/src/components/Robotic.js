import React, { Component } from "react";
import webd from '../assets/img/robotic.svg';
import { RoboticBio,RoboticSkill } from '../Name'

class Robotic extends Component {
    render() {
      const BioList = RoboticBio.map(
        Dev=> (
          <div key={Dev.id}>
          <p><span role="img" aria-label="Heart">⚡</span> {Dev}</p>
          </div>

      )
      )
      const RoboticToollist = RoboticSkill.map(
        dev=> (
          <img key={dev.icon} className="sm-item" src={dev.img} alt="Project" />

        )
        )
      return (
        <div>
        <div className="main">
          <div className="img-part">
            <img src={webd} alt="clip worl" />
          </div>
          <div className="text-part">
            <div className="text">
              <h2>Robotic</h2>
              {BioList}
              <div className="sm">
              {RoboticToollist}
              </div>
            </div>
          </div>
        </div>        

        </div>
      );
    }
  }
  
  export default Robotic;