import React, { Component } from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import education from '../assets/img/clip-work-searches.svg';
import './education.css';
import Card from '../components/CertiCard'
import { greeting, EducationBio } from '../Name'

class Education extends Component {
    render() {
      const EduList = EducationBio.map(
        Edu=> (
          <div key={Edu}>
          <p><span role="img" aria-label="Heart">⚡</span> {Edu}</p>
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
            <div className="edu">
              {EduList}
            </div>
            <br/>
            <br/>
            </div>
          </div>
          <div className="img-part" >
            <img src={education} alt="about" />
          </div>
          </div>
          <br/>
          <h1>My certificate</h1>
          <Card />
          <Footer/>
        </div>
      );
    }
  }
  
  export default Education;