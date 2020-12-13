import React, { Component } from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer'
import Sm from '../components/Sm'
import contact from '../assets/img/message.svg'
import { greeting, ContactBio } from '../Name'


class Contact extends Component {
    render() {
      const Contaclist = ContactBio.map(
        Contac=> (
          <div key={Contac}>
          <p><span role="img" aria-label="Heart">⚡</span> {Contac}</p>
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
              {Contaclist}
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