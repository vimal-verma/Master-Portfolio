import React, { Component } from "react";
import illustrator from '../assets/img/icons8-adobe-illustrator.svg';
import photoshop from '../assets/img/icons8-adobe-photoshop.svg';
import premiere from '../assets/img/icons8-adobe-premiere-pro.svg';
import figma from '../assets/img/icons8-figma.svg';

import './tool.css'

class Tool extends Component {
    render() {
      return (
        <div className="Tool Tool-inline">
             <img className="Tool-item" src={figma} alt="figma" />  
             <img className="Tool-item" src={photoshop} alt="phoroshop" />  
             <img className="Tool-item" src={premiere} alt="premiere" />  
             <img className="Tool-item" src={illustrator} alt="illustrator" />  

        </div>
      );
    }
  }
  
  export default Tool;