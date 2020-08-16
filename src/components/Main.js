import React, { Component } from "react";
import clipWork from '../assets/img/clip-work-searches.svg';
import './main.css'

class Main extends Component {
    render() {
      return (
        <div className="main">
          <div className="left">
            <div className="text">
              <h1>vimal</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, ad ex voluptatum natus nulla voluptatem obcaecati harum reiciendis porro praesentium illo blanditiis, sint, voluptate velit! Dolores perspiciatis debitis voluptates qui.</p>
            </div>
          </div>
          <div className="right">
            <img src={clipWork} alt="clip worl" />
          </div>
        </div>
      );
    }
  }
  
  export default Main;