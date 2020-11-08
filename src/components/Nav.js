import React, { Component } from "react";
import { NavLink,Link } from 'react-router-dom'; 
import { BlogData,greeting } from '../Name'
import './nav.css'

class Nav extends Component {
    render() {
      let skill ="Skill";
      if(BlogData.show_Blog){
        skill= "Blog"
      }
      let logo = <h2>{greeting.logo_name}</h2>;
      if(greeting.logo_img_show){
        logo = <img src={greeting.logo_img} alt={greeting.logo_name} />
      }

      
      return (
        <div>
          <header className="header">
            <NavLink to="/" tag={Link} className="logo">
            {logo}
            </NavLink>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>
            <ul className="menu">
              <li>
                <NavLink
                  to="/"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  onMouseEnter={(event) => onMouseEnter(event)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  onMouseEnter={(event) => onMouseEnter(event)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/education"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  onMouseEnter={(event) => onMouseEnter(event)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Education
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  onMouseEnter={(event) => onMouseEnter(event)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Skill"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  onMouseEnter={(event) => onMouseEnter(event)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  {skill}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  onMouseEnter={(event) => onMouseEnter(event)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Contact Me
                </NavLink>
              </li>
            </ul>
          </header>
        </div>
      );
    }
  }
  
  export default Nav;
  const onMouseEnter = (event, color) => {
    const el = event.target;
    el.style.backgroundColor = "#e6e6e6";
  };
  
  const onMouseOut = (event) => {
    const el = event.target;
    el.style.backgroundColor = "transparent";
  };
  