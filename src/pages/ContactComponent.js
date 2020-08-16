import React, { Component } from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer'
import Tool from '../components/Tools'
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
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, ad ex voluptatum natus nulla voluptatem obcaecati harum reiciendis porro praesentium illo blanditiis, sint, voluptate velit! Dolores perspiciatis debitis voluptates qui.</p>
              <Sm />
            </div>
          </div>
          <div className="img-part" >
            <img src={contact} alt="about" />
          </div>
          </div>
          <br/>
          <Tool />
          <Footer/>
        </div>
      );
    }
  }
  
  export default Contact;