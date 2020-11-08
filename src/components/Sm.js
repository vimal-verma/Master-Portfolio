import React, { Component } from "react";
import {socialMedia} from '../Name';
import './sm.css'

class Sm extends Component {
    render() {
      const Smlist = socialMedia.map(
        sm=> (
          <a href={sm.link}><img key={sm.icon} className="sm-item" src={sm.img} alt="Project" /></a>

        )
        )
      return (
        <div className="sm">
            {Smlist}
        </div>
      );
    }
  }
  
  export default Sm;