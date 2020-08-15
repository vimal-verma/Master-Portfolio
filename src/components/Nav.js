import React, { Component } from "react";
import { Link } from 'react-router-dom'; 

class Nav extends Component {
    render() {
      return (
        <ul className="nav"> 
              <li className="navitem"> 
                <Link to="/">Home</Link> 
              </li> 
              <li className="navitem"> 
                <Link to="/about">About Us</Link> 
              </li> 
              <li className="navitem"> 
                <Link to="/contact">Contact Us</Link> 
              </li> 
              <li className="navitem"> 
                <Link to="/experience">experience</Link> 
              </li> 
              <li className="navitem"> 
                <Link to="/project">projects</Link> 
              </li> 
              <li className="navitem"> 
                <Link to="/skill">skills</Link> 
              </li> 
        </ul> 
      );
    }
  }
  
  export default Nav;