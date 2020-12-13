import React, { Component } from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import error from '../assets/img/pixeltrue-error-1.svg';
import './NotFound.css';

class NotFound extends Component {
    render() {
      return (
        <div className="footer">
        <Nav/>
          <img src={error} alt="404" />
          <Footer/>
        </div>
      );
    }
  }
  
  export default  NotFound;