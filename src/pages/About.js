import React, { Component } from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer'
import Sm from '../components/Sm'
import about from '../assets/img/about.svg'

class About extends Component {
    render() {
      return (
        <div>
          <Nav/>
          <div className="main">
          <div className="text-part" >
          <div className="text">
              <h1>Vimal Kumar</h1>
              <p>I'm a student pursuing Bachelors's in Computer Science 🎓 from IIIT Ranchi 🏛️. I'm a passionate learner who's always willing to learn and work across technologies and domains 💡. I love to explore new technologies and leverage 🌟. Apart from that I also love to guide and mentor newbies 👨🏻‍💻. I'm currently into Web Development 🕸️ and working on my MERN Website</p>
              <Sm />
            </div>
          </div>
          <div className="img-part" >
            <img src={about} alt="about" />
          </div>
          </div>
          <br/>
          <p>I’m currently working with Node.js, Express.js, React, Graphql, Mongodb, Javascript, etc computer</p>
          <p> I’m currently learning Full Stack Development.</p>
          <p>Most of my projects are available on Github.</p>
          <p>Fun fact: Equal is Not Always Equal in Javascript.</p>
          <Footer/>
        </div>
      );
    }
  }
  
  export default About;