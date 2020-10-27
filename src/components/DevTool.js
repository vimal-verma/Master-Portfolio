import React, { Component } from "react";
import './tool.css'
import {DevSkill} from '../Name'

class Tool extends Component {
    render() {
      const Devlist = DevSkill.map(
        dev=> (
            <a key={dev.icon} className="sm-item" href="/"><i className={dev.fontawesome}></i></a>

        )
        )
      return (
        <div className="sm">
        {Devlist}
        </div>
      );
    }
  }
  
  export default Tool;