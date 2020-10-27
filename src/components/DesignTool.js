import React, { Component } from "react";
import {DesignSkill} from '../Name'
import './tool.css'

class Tool extends Component {
    render() {
      const DesignTool = DesignSkill.map(
        dev=> (
            <a key={dev.icon} className="sm-item" href="/"><i className={dev.fontawesome}></i></a>

        )
        )
      return (
        <div className="sm">
        {DesignTool}
        </div>
      );
    }
  }
  
  export default Tool;