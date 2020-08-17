import React, { Component } from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer'
import project from '../assets/img/project.svg'
import Card from '../components/Card'

class Project extends Component {
    render() {
      return (
        <div>
          <Nav/>
          <div className="main">
          <div className="text-part" >
          <div className="text">
            <h1>My Project List</h1>
            <p><span role="img" aria-label="Heart">⚡</span> Bob - A Flutter App</p>
            <p><span role="img" aria-label="Heart">⚡</span> Letskhabar - A Blog Website</p>
            <p><span role="img" aria-label="Heart">⚡</span> IIITian Network (Ranchi) - Website</p>
            <p><span role="img" aria-label="Heart">⚡</span> Prime-num - A Npm package</p>
          </div>
          </div>
          <div className="img-part" >
            <img src={project} alt="project" />
          </div>
          </div>
          <br/>
          <h1>My Project Sample</h1>
          <Card />
          <Footer/>
        </div>
      );
    }
  }
  
  export default Project;