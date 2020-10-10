import React, { Component } from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer'
import Sm from '../components/Sm'
import contact from '../assets/img/message.svg'
import { greeting, about } from '../Name'


class Contact extends Component {
    render() {
      return (
        <div>
          <Nav/>
          <div className="main">
          <div className="text-part" >
          <div className="text">
          <h1>Hi, I'm {greeting.title}</h1>
              <p><span role="img" aria-label="Heart">⚡</span> I'm a student pursuing {about.course} in {about.department} <span role="img" aria-label="Heart">🎓</span> from {about.university} <span role="img" aria-label="Heart">⚡🏛️</span></p>
              <p><span role="img" aria-label="Heart">⚡</span> I am From {about.Home}</p>
              <p><span role="img" aria-label="Heart">⚡</span> I am available on almost every social media. You can message me</p>
              <Sm />
            </div>
          </div>
          <div className="img-part" >
            <img src={contact} alt="about" />
          </div>
          </div>
          <br/>
          <Footer/>
        </div>
      );
    }
  }
  
  export default Contact;