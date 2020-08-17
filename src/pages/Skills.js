import React, { Component } from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer'
import DevTool from '../components/DevTool';
import Designtool from '../components/DesignTool'
import skills from '../assets/img/skill.svg'

class Skills extends Component {
    render() {
      return (
        <div>
          <Nav/>
          <div className="main">
          <div className="text-part" >
          <div className="text">
          <h1><span role="img" aria-label="Heart">⚡</span> Full Stack Development</h1>
          <DevTool />
          <h1><span role="img" aria-label="Heart">⚡</span> Design</h1>
          <Designtool />
            </div>
          </div>
          <div className="img-part" >
            <img src={skills} alt="Skills" />
          </div>
          </div>
          <br/>
          <Footer/>
        </div>
      );
    }
  }
  
  export default Skills;