import React, { Component } from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer'
import Sm from '../components/Sm'
import contact from '../assets/img/message.svg'


class Contact extends Component {
    render() {
      return (
        <div>
          <Nav/>
          <div className="main">
          <div className="text-part" >
          <div className="text">
          <h1>Hi, I'm Vimal Kumar</h1>
              <p>⚡ I'm a student pursuing Bachelors's in Computer Science 🎓 from IIIT Ranchi 🏛️</p>
              <p>⚡ I am From Makhdumpur, Jehanabad (Bihar)</p>
              <p>⚡ I am available on almost every social media. You can message me</p>
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