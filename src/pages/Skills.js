import React, { Component } from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer'
import { BlogData } from '../Name'
import skills from '../assets/img/skill.svg'
import Blog from "../components/Blog";

class Skills extends Component {
    render() {

      const BioList = BlogData.Blog_Bio.map(
        Dev=> (
          <div key={Dev.id}>
          <p><span role="img" aria-label="Heart">⚡</span> {Dev}</p>
          </div>

      )
      )


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
          {BioList}
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