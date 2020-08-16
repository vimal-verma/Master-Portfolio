import React, { Component } from "react";
import facebook from '../assets/img/web-design.svg';
import './sm.css'

class Sm extends Component {
    render() {
      return (
        <div className="sm">
            <a className="sm-item" href="https://facebook.com"><img src={facebook} alt="facebook" /> </a>
        </div>
      );
    }
  }
  
  export default Sm;