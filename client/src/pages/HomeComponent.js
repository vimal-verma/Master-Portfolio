import React, { Component } from "react";
import Nav from '../components/Nav';
import Main from '../components/Main'
import Footer from '../components/Footer'

class Home extends Component {
    render() {
      return (
        <div>
        <Nav/>
        <Main />
        <Footer/>
        </div>
      );
    }
  }
  
  export default Home;