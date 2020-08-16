import React, { Component } from "react";
import Home from '../assets/img/home.svg';
import webd from '../assets/img/web-dev.svg';
import webde from '../assets/img/web-design.svg';
import Sm from './Sm'
import DevTool from './DevTool'
import DesignTool from './DesignTool'
import './main.css'

class Main extends Component {
    render() {
      return (
        <div>
          <div className="main">
          <div className="text-part">
            <div className="text">
              <h1>Vimal Kumar</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, ad ex voluptatum natus nulla voluptatem obcaecati harum reiciendis porro praesentium illo blanditiis, sint, voluptate velit! Dolores perspiciatis debitis voluptates qui.</p>
              <Sm />
            </div>
          </div>
          <div className="img-part">
            <img src={Home} alt="clip worl" />
          </div>
        </div>
        <h1>What I Do?</h1>
        <div className="main">
          <div className="img-part">
            <img src={webd} alt="clip worl" />
          </div>
          <div className="text-part">
            <div className="text">
              <h2>Full Stack Development</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, ad ex voluptatum natus nulla voluptatem obcaecati harum reiciendis porro praesentium illo blanditiis, sint, voluptate velit! Dolores perspiciatis debitis voluptates qui.</p>
              <DevTool />
            </div>
          </div>
        </div>
        <div className="main">
          <div className="text-part">
            <div className="text">
              <h2>Design</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, ad ex voluptatum natus nulla voluptatem obcaecati harum reiciendis porro praesentium illo blanditiis, sint, voluptate velit! Dolores perspiciatis debitis voluptates qui.</p>
              <DesignTool />
            </div>
          </div>
          <div className="img-part">
            <img src={webde} alt="clip worl" />
          </div>
        </div>
        

        </div>
      );
    }
  }
  
  export default Main;