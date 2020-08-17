import React, { Component } from 'react'
import project1 from '../assets/img/project1.png'
import project2 from '../assets/img/project2.png'
import project3 from '../assets/img/project3.jpg'
import './card.css'

class Card extends Component {
    render() {
        return (
            <div className="project">
                <a href="https://github.com/vimalverma558/bob">
                <div className="card">
                    <img src={project1} alt="project1" />
                    <h1>Bob</h1>
                    <p>A Flutter App</p>
                </div>
                </a>
                <a href="https://letskhabar.com/">
                <div className="card">
                    <img src={project2} alt="project2" />
                    <h1>Letskhabar</h1>
                    <p>A Blog website</p>
                </div>
                </a>
                <a href="https://ranchi.iiitiansnetwork.com/">
                <div className="card">
                    <img src={project3} alt="project3" />
                    <h1> IIITian Network (Ranchi)</h1>
                    <p>Website</p>
                </div>
                </a>
            </div>
        )
    }
}
export default Card;