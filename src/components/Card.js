import React, { Component } from 'react'
import './card.css'
import {projects} from '../Name'

class Card extends Component {
    render() {
        // console.log(projects)
        const projectlost = projects.map(
            Project=> (
                <div className="card" key={Project.id}>
                <h1>{Project.name}</h1>
                <p>{Project.Description}</p>
                <h4>{Project.Live_link}</h4>
                <h4>{Project.Code_Link}</h4>
                <p>{Project.tool_used}</p>
                </div>

            )
            )
        return (
            <div className="project">{projectlost}</div>
        )
    }
}
export default Card;