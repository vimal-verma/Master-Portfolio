import React, { Component } from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer'
import DevTool from '../components/DevTool';
import Designtool from '../components/DesignTool'
import skills from '../assets/img/skill.svg'
import Blog from "../components/Blog";
import {BlogData} from "../Name";

class Skills extends Component {
    render() {

    let ShowBlog;
    if (BlogData.show_Blog) {
      ShowBlog = <Blog/>;
    } else {
      ShowBlog = ""
    }
      

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
          {ShowBlog}
          <br/>
          <Footer/>
        </div>
      );
    }
  }
  
  export default Skills;