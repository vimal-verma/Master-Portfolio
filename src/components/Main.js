import React, { Component } from "react";
import Home from '../assets/img/home.svg';
import webd from '../assets/img/web-dev.svg';
import webde from '../assets/img/web-design.svg';
import Sm from './Sm';
import DevTool from './DevTool';
import DesignTool from './DesignTool';
import './main.css'

class Main extends Component {
    render() {
      return (
        <div>
          <div className="main">
          <div className="text-part">
            <div className="text">
              <h1>Hi, I'm Vimal Kumar</h1>
              <p>I'm a student pursuing Bachelors's in Computer Science 🎓 from IIIT Ranchi 🏛️. I'm a passionate learner who's always willing to learn and work across technologies and domains 💡. I love to explore new technologies and leverage 🌟. Apart from that I also love to guide and mentor newbies 👨🏻‍💻. I'm currently into Web Development 🕸️ and working on my MERN Website</p>
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
              <p> ⚡ Building resposive website front end using React-Redux</p>
              <p> ⚡ Developing mobile applications using Flutter</p>
              <p> ⚡ Creating application backend in Node & Express</p>
              <DevTool />
            </div>
          </div>
        </div>
        <div className="main">
          <div className="text-part">
            <div className="text">
              <h2>Design</h2>
              <p>⚡ Designing attractive user interface for mobile and web applications</p>
              <p>⚡ Customizing logo designs</p>
              <p>⚡ Editing video</p>
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