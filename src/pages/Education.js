import React, { Component } from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer'
import education from '../assets/img/clip-work-searches.svg'
import './education.css'

class Education extends Component {
    render() {
      return (
        <div>
          <Nav/>
          <div className="main">
          <div className="text-part" >
          <div className="text">
            <h1>Hi, I'm Vimal Kumar</h1>
            <div className="edu">
              <h3 className="edu-item1"><span role="img" aria-label="Heart">⚡</span> High School Makhdumpur</h3>
              <p className="edu-item2">10th in 2015</p>
              <h3 className="edu-item1"><span role="img" aria-label="Heart">⚡</span> Gaya Evening College, Gaya</h3>
              <p className="edu-item2">12th in 2017</p>
              <h3 className="edu-item1"><span role="img" aria-label="Heart">⚡</span> Indian Institute of Information Technology Ranchi</h3>
              <p className="edu-item2">CSE ( B.Tech ) From 2018</p>
            </div>
            <br/>
            <br/>
            </div>
          </div>
          <div className="img-part" >
            <img src={education} alt="about" />
          </div>
          </div>
          <Footer/>
        </div>
      );
    }
  }
  
  export default Education;