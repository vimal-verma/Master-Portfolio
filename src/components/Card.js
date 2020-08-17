import React, { Component } from 'react'
import project1 from '../assets/img/project1.png'
import project2 from '../assets/img/project2.png'
import project3 from '../assets/img/project3.jpg'
import './card.css'

class Card extends Component {
    render() {
        return (
            <div className="project">
                <div className="card">
                    <img src={project1} alt="project1" />
                    <h1>project1</h1>
                    <p>hello project1</p>
                </div>
                <div className="card">
                    <img src={project2} alt="project2" />
                    <h1>project1</h1>
                    <p>hhhhhhhhhhhhhhhhhhhhhhh</p>
                </div>
                <div className="card">
                    <img src={project3} alt="project3" />
                    <h1>project1</h1>
                    <p>hello project1</p>
                </div>
            </div>
        )
    }
}
export default Card;