import React, { Component } from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer'
import Sm from '../components/Sm'
import aboutimg from '../assets/img/about.svg'
import { greeting, about } from '../Name'

class About extends Component {
    render() {
      return (
        <div>
          <Nav/>
          <div className="main">
          <div className="text-part" >
          <div className="text">
              <h1>Hi, I'm {greeting.title}</h1>
              <p><span role="img" aria-label="Heart">⚡</span> I'm a student pursuing {about.course} in {about.department} <span role="img" aria-label="Heart">🎓</span> from {about.university} 🏛️</p>
              <p><span role="img" aria-label="Heart">⚡</span> I’m currently learning Full Stack Development.</p>
              <p><span role="img" aria-label="Heart">⚡</span> I’m currently working with Node.js, Express.js, React, Mongodb, Javascript, Flutter, etc</p>
              <p><span role="img" aria-label="Heart">⚡</span> Fun fact: 'Equal is Not Always Equal in Javascript'</p>
              <p><span role="img" aria-label="Heart">⚡</span> I am From {about.Home}</p>
              <p><span role="img" aria-label="Heart">⚡</span> I am available on almost every social media. You can message me</p>
              <Sm />
            </div>
          </div>
          <div className="img-part" >
            <img src={aboutimg} alt="about" />
          </div>
          </div>
          <br/>
          <Footer/>
        </div>
      );
    }
  }
  
  export default About;