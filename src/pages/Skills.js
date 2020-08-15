import React, { Component } from "react";
import Nav from '../components/Nav';
import kingdom from '../assets/img/kingdom-1060.svg';

class Skill extends Component {
    render() {
      return (
        <div>
          <Nav/>
          <h1>Skill</h1>
          <img src={kingdom} alt="404" />
        </div>
      );
    }
  }
  
  export default Skill;