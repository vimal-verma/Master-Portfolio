import React, { Component } from "react";
import webde from '../assets/img/game.svg';
import { Gamedev_Bio,Gamedev_Skill } from '../Name'

class Game extends Component {
    render() {
      const BioList = Gamedev_Bio.map(
        Design=> (
          <div key={Design.id}>
          <p><span role="img" aria-label="Heart">⚡</span> {Design}</p>
          </div>

      )
      )
      const gameToollist = Gamedev_Skill.map(
        dev=> (
          <img key={dev.icon} className="sm-item" src={dev.img} alt="Project" />

        )
        )
      return (
        <div>
        <div className="main">
          <div className="text-part">
            <div className="text">
              <h2>Game Development</h2>
              {BioList}
              <div className="sm">
              {gameToollist}
              </div>
            </div>
          </div>
          <div className="img-part">
            <img src={webde} alt="clip worl" />
          </div>
        </div>  

        </div>
      );
    }
  }
  
  export default Game;