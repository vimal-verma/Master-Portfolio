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
              <p>I'm a student pursuing Bachelors's in Computer Science <span role="img" aria-label="Heart">🎓</span> from IIIT Ranchi <span role="img" aria-label="Heart">🏛️</span>. I'm a passionate learner who's always willing to learn and work across technologies and domains <span role="img" aria-label="Heart">💡</span>. I love to explore new technologies and leverage <span role="img" aria-label="Heart">🌟</span>. Apart from that I also love to guide and mentor newbies <span role="img" aria-label="Heart">👨🏻‍💻</span>. I'm currently into Web Development <span role="img" aria-label="Heart">🕸️</span> and working on my MERN Website</p>
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
              <p> <span role="img" aria-label="Heart">⚡</span> Building resposive website front end using React-Redux</p>
              <p> <span role="img" aria-label="Heart">⚡</span> Developing mobile applications using Flutter</p>
              <p> <span role="img" aria-label="Heart">⚡</span> Creating application backend in Node & Express</p>
              <DevTool />
            </div>
          </div>
        </div>
        <div className="main">
          <div className="text-part">
            <div className="text">
              <h2>Design</h2>
              <p><span role="img" aria-label="Heart">⚡</span> Designing attractive user interface for mobile and web applications</p>
              <p><span role="img" aria-label="Heart">⚡</span> Customizing logo designs</p>
              <p><span role="img" aria-label="Heart">⚡</span> Editing video</p>
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