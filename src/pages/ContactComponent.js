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
              <h1>Vimal Kumar</h1>
              <p>I'm a student pursuing Bachelors's in Computer Science 🎓 from IIIT Ranchi 🏛️. I'm a passionate learner who's always willing to learn and work across technologies and domains 💡. I love to explore new technologies and leverage 🌟. Apart from that I also love to guide and mentor newbies 👨🏻‍💻. I'm currently into Web Development 🕸️ and working on my MERN Website</p>
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