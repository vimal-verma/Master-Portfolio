import React, { Component } from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer'
import Sm from '../components/Sm'
import aboutimg from '../assets/img/about.svg'
import { greeting, AboutBio } from '../Name'

class About extends Component {
    render() {
      const Biolist = AboutBio.map(
        bio=> (
          <div key={bio}>
          <p><span role="img" aria-label="Heart">⚡</span> {bio}</p>
          </div>

      )
      )

      return (
        <div>
          <Nav/>
          <div className="main">
          <div className="text-part" >
          <div className="text">
              <h1>{greeting.title}</h1>
              <div>{Biolist}</div>
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