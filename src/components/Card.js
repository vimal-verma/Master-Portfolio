import React, { Component } from 'react'
import './card.css'
import {projects} from '../Name'

class Card extends Component {
    render() {
        // console.log(projects)
        const projectlost = projects.map(
            Project=> (
                <div className="card" key={Project.id}>
                <img src={Project.img} alt="Project" />
                <h1>{Project.name}</h1>
                <p>{Project.Description}</p>
                <code>{Project.tool_used}</code>
                <div className="icons">
                <a href={Project.Live_link}><i class="fas fa-globe fa-2x"></i></a>
                <a href={Project.Code_Link}><i class="fas fa-code fa-2x"></i></a>
                </div>
                </div>

            )
            )
        return (
            <div className="project">{projectlost}</div>
        )
    }
}
export default Card;