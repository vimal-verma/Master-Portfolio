import React, { Component } from "react";
import html from '../assets/img/icons8-html-5.svg';
import css3 from '../assets/img/icons8-css3.svg';
import javascript from '../assets/img/icons8-javascript.svg';
import react from '../assets/img/icons8-react.svg';
import node from '../assets/img/icons8-node.svg';
import npm from '../assets/img/icons8-npm.svg';
import mongodb from '../assets/img/icons8-mongodb.svg';
import firebase from '../assets/img/icons8-firebase.svg';
import flutter from '../assets/img/icons8-flutter.svg';
import git from '../assets/img/icons8-git.svg';
import github from '../assets/img/icons8-github.svg';
import './tool.css'

class Tool extends Component {
    render() {
      return (
        <div className="Tool Tool-inline">
             <img className="Tool-item" src={html} alt="html" />  
             <img className="Tool-item" src={css3} alt="css" />  
             <img className="Tool-item" src={javascript} alt="javascript" />  
             <img className="Tool-item" src={react} alt="react" />  
             <img className="Tool-item" src={node} alt="node" />  
             <img className="Tool-item" src={npm} alt="npm" /> 
             <img className="Tool-item" src={mongodb} alt="mongidb" />   
             <img className="Tool-item" src={firebase} alt="firebase" />    
             <img className="Tool-item" src={flutter} alt="flutter" /> 
             <img className="Tool-item" src={git} alt="git" />
             <img className="Tool-item" src={github} alt="github" />  
        </div>
      );
    }
  }
  
  export default Tool;