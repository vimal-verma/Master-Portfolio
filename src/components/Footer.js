import React, { Component } from "react";
import { greeting } from '../Name';
import './footer.css'

class Footer extends Component {
    render() {
      return (
        <div className="foot">
          <p>Made with <a href="https://github.com/vimalverma558/Master-Portfolio">Master-Portfolio</a> <span role="img" aria-label="Heart"> ❤️ </span> by { greeting.title } </p>
          
        </div>
      );
    }
  }
  
  export default Footer;