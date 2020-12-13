import React, { Component } from "react";
import webd from '../assets/img/programming.svg';
import { ProgrammingBio,ProgrammingSkill } from '../Name'

class Programmer extends Component {
    render() {
      const BioList = ProgrammingBio.map(
        Dev=> (
          <div key={Dev.id}>
          <p><span role="img" aria-label="Heart">⚡</span> {Dev}</p>
          </div>

      )
      )
      const ProgrammingToollist = ProgrammingSkill.map(
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
              <h2>Programming</h2>
              {BioList}
              <div className="sm">
              {ProgrammingToollist}
              </div>
            </div>
          </div>
        </div>        

        </div>
      );
    }
  }
  
  export default Programmer;