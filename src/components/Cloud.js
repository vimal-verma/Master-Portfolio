import React, { Component } from "react";
import webd from '../assets/img/cloud.svg';
import { cloud_infra_architecture_Bio,cloud_infra_architecture_Skill } from '../Name'

class Cloud extends Component {
    render() {
      const BioList = cloud_infra_architecture_Bio.map(
        Dev=> (
          <div key={Dev.id}>
          <p><span role="img" aria-label="Heart">⚡</span> {Dev}</p>
          </div>

      )
      )
      const CloudToollist = cloud_infra_architecture_Skill.map(
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
              <h2>Cloud Infra-Architecture</h2>
              {BioList}
              <div className="sm">
              {CloudToollist}
              </div>
            </div>
          </div>
        </div>        

        </div>
      );
    }
  }
  
  export default Cloud;