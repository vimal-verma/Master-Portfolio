import React, { Component } from "react";
import webd from '../assets/img/mlai.svg';
import { Ml_ai_Bio,Ml_ai_Skill } from '../Name'
import './main.css'

class Mlai extends Component {
    render() {
      const BioList = Ml_ai_Bio.map(
        Dev=> (
          <div key={Dev.id}>
          <p><span role="img" aria-label="Heart">⚡</span> {Dev}</p>
          </div>

      )
      )
      const mlToollist = Ml_ai_Skill.map(
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
              <h2>ML & AI</h2>
              {BioList}
              <div className="sm">
              {mlToollist}
              </div>
            </div>
          </div>
        </div>        

        </div>
      );
    }
  }
  
  export default Mlai;