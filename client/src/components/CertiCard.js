import React, { Component } from 'react'
import './card.css'
import {certificate} from '../Name'

class Card extends Component {
    render() {
        // console.log(projects)
        const Certilist = certificate.map(
            Certi=> (
                <div className="card icon-box" key={Certi.id}>
                <img src={Certi.img} alt="Project" />
                <h1 className="black">{Certi.name}</h1>
                <p className="black">{Certi.Description}</p>
                <div className="icons">
                <a href={Certi.Link}><i class="fas fa-globe fa-2x"></i></a>
                </div>
                </div>

            )
            )
        return (
            <div className="project">{Certilist}</div>
        )
    }
}
export default Card;