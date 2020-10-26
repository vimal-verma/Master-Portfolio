import React, { Component } from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer'
import project from '../assets/img/project.svg'
import Card from '../components/ProjectCard'
import {ProjectsBio} from '../Name'

class Project extends Component {
    render() {
              // console.log(projects)
              const projectlost = ProjectsBio.map(
                Project=> (
                    <div key={Project}>
                    <p><span role="img" aria-label="Heart">⚡</span> {Project}</p>
                    </div>
    
                )
                )
      return (
        <div>
          <Nav/>
          <div className="main">
          <div className="text-part" >
          <div className="text">
            <div>{projectlost}</div>
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