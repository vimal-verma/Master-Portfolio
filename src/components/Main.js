import React, { Component } from "react";
import Home from '../assets/img/home.svg';
import webd from '../assets/img/web-dev.svg';
import webde from '../assets/img/web-design.svg';
import Sm from './Sm';
import DevTool from './DevTool';
import DesignTool from './DesignTool';
import { greeting,DesignBio,DevBio } from '../Name'
import './main.css'

class Main extends Component {
    render() {
      const Devlist = DevBio.map(
        Dev=> (
          <div key={Dev.id}>
          <p><span role="img" aria-label="Heart">⚡</span> {Dev}</p>
          </div>

      )
      )
      const Designlist = DesignBio.map(
        Design=> (
          <div key={Design.id}>
          <p><span role="img" aria-label="Heart">⚡</span> {Design}</p>
          </div>

      )
      )
      return (
        <div>
          <div className="main">
          <div className="text-part">
            <div className="text">
              <h1>Hi, I'm { greeting.title } </h1>
              <p> { greeting.subTitle } </p>
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
              {Devlist}
              <DevTool />
            </div>
          </div>
        </div>
        <div className="main">
          <div className="text-part">
            <div className="text">
              <h2>Design</h2>
              {Designlist}
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