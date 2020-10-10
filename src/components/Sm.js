import React, { Component } from "react";
import facebook from '../assets/img/icons8-facebook.svg';
import twitter from '../assets/img/icons8-twitter.svg';
import linkedin from '../assets/img/icons8-linkedin.svg';
import dev from '../assets/img/icons8-dev.svg';
import github from '../assets/img/icons8-github.svg';
import gitlab from '../assets/img/icons8-gitlab.svg';
import gmail from '../assets/img/icons8-mail.png';
import {socialMedia} from '../Name';
import './sm.css'

class Sm extends Component {
    render() {
      return (
        <div className="sm">
            <a className="sm-item" href={socialMedia.facebook}><img src={facebook} alt="facebook" /></a>
            <a className="sm-item" href={socialMedia.twitter}><img src={twitter} alt="twitter" /></a>
            <a className="sm-item" href={socialMedia.linkedin}><img src={linkedin} alt="linkedin" /></a>
            <a className="sm-item" href={socialMedia.devto}><img src={dev} alt="dev" /></a>
            <a className="sm-item" href={socialMedia.github}><img src={github} alt="github" /></a>
            <a className="sm-item" href={socialMedia.gitlab}><img src={gitlab} alt="gitlab" /></a>
            <a className="sm-item" href={socialMedia.mailto}><img src={gmail} alt="gmail" /></a>
        </div>
      );
    }
  }
  
  export default Sm;