import React, { Component } from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer'
import project from '../assets/img/project.svg'
import Card from '../components/Card'
import {projects} from '../Name'

class Project extends Component {
    render() {
              // console.log(projects)
              const projectlost = projects.map(
                Project=> (
                    <div key={Project.id}>
                    <p><span role="img" aria-label="Heart">⚡</span> {Project.name}</p>
                    </div>
    
                )
                )
      return (
        <div>
          <Nav/>
          <div className="main">
          <div className="text-part" >
          <div className="text">
            <h1>My Project List</h1>
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