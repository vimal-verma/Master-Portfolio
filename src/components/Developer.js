import React, { Component } from "react";
import webd from '../assets/img/web-dev.svg';
import { DevBio,DevSkill } from '../Name'
import './main.css'

class Developer extends Component {
    render() {
      const Devlist = DevBio.map(
        Dev=> (
          <div key={Dev.id}>
          <p><span role="img" aria-label="Heart">⚡</span> {Dev}</p>
          </div>

      )
      )
      const DevToollist = DevSkill.map(
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
              <h2>Full Stack Development</h2>
              {Devlist}
              <div className="sm">
              {DevToollist}
              </div>
            </div>
          </div>
        </div>        

        </div>
      );
    }
  }
  
  export default Developer;