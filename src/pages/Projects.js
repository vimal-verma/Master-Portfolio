import React, { Component } from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer'
import Tool from '../components/Tools'
import Sm from '../components/Sm'
import project from '../assets/img/project.svg'

class Project extends Component {
    render() {
      return (
        <div>
          <Nav/>
          <div className="main">
          <div className="text-part" >
          <div className="text">
              <h1>Vimal Kumar</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, ad ex voluptatum natus nulla voluptatem obcaecati harum reiciendis porro praesentium illo blanditiis, sint, voluptate velit! Dolores perspiciatis debitis voluptates qui.</p>
              <Sm />
            </div>
          </div>
          <div className="img-part" >
            <img src={project} alt="project" />
          </div>
          </div>
          <br/>
          <Tool />
          <Footer/>
        </div>
      );
    }
  }
  
  export default Project;