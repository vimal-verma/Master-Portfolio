import React, { Component } from "react";
import {socialMedia} from '../Name';
import './sm.css'

class Sm extends Component {
    render() {
      const Smlist = socialMedia.map(
        sm=> (
            <a key={sm.icon} className="sm-item" href={sm.link}><i className={sm.fontawesome}></i></a>

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