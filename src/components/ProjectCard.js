import React, { Component } from 'react'
import './card.css'
import {projects} from '../Name'

class Card extends Component {
    render() {
        // console.log(projects)
        const projectlist = projects.map(
            Project=> (
                <div className="card icon-box" key={Project.id}>
                <img src={Project.img} alt="Project" />
                <h1 className="black">{Project.name}</h1>
                <p className="black">{Project.Description}</p>
                <code>{Project.tool_used}</code>
                <div className="icons">
                <a href={Project.Live_link}><i class="fas fa-globe fa-2x"></i></a>
                <a href={Project.Code_Link}><i class="fas fa-code fa-2x"></i></a>
                </div>
                </div>

            )
            )
        return (
            <div className="project">{projectlist}</div>
        )
    }
}
export default Card;