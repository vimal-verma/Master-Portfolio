import React, { Component } from "react";
import webde from '../assets/img/data.svg';
import { data_Science_Bio,data_Science_Skill } from '../Name'

class Data extends Component {
    render() {
      const BioList = data_Science_Bio.map(
        Design=> (
          <div key={Design.id}>
          <p><span role="img" aria-label="Heart">⚡</span> {Design}</p>
          </div>

      )
      )
      const dataToollist = data_Science_Skill.map(
        dev=> (
          <img key={dev.icon} className="sm-item" src={dev.img} alt="Project" />

        )
        )
      return (
        <div>
        <div className="main">
          <div className="text-part">
            <div className="text">
              <h2>Data Science</h2>
              {BioList}
              <div className="sm">
              {dataToollist}
              </div>
            </div>
          </div>
          <div className="img-part">
            <img src={webde} alt="clip worl" />
          </div>
        </div>  

        </div>
      );
    }
  }
  
  export default Data;