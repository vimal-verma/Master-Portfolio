import React from 'react';
import './App.css';
import Home from './pages/HomeComponent';
import Experience from './pages/Experience';
import Contact from './pages/ContactComponent';
import Project from './pages/Projects'
import Skill from './pages/Skills'
import About from './pages/About'
import vim from './img/vimal.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={vim} alt="vim" />
        <Home/>
        <Experience/>
        <Contact/>
        <Project/>
        <Skill/>
        <About/>
      </header>
    </div>
  );
}

export default App;
