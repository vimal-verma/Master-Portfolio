import React, { Component } from "react";
import './tool.css'
import DevTool from './DevTool'
import DesignTool from './DesignTool'

class Tool extends Component {
    render() {
      return (
        <div className="Tool-inline">
             <DevTool />
             <DesignTool /> 
        </div>
      );
    }
  }
  
  export default Tool;