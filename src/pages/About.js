import React, { Component } from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer'

class About extends Component {
    render() {
      return (
        <div>
          <Nav/>
          <h1>About</h1>
          <Footer/>
        </div>
      );
    }
  }
  
  export default About;