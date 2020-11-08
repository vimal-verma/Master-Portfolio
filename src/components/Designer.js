import React, { Component } from "react";
import webde from '../assets/img/web-design.svg';
import { DesignBio,DesignSkill } from '../Name'
import './main.css'

class Designer extends Component {
    render() {
      const Designlist = DesignBio.map(
        Design=> (
          <div key={Design.id}>
          <p><span role="img" aria-label="Heart">⚡</span> {Design}</p>
          </div>

      )
      )
      const DesignToollist = DesignSkill.map(
        dev=> (
          <img key={dev.icon} className="sm-item" src={dev.img} alt="Project" />

        )
        )
      return (
        <div>
        <div className="main">
          <div className="text-part">
            <div className="text">
              <h2>Design</h2>
              {Designlist}
              <div className="sm">
              {DesignToollist}
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
  
  export default Designer;