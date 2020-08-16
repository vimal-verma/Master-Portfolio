import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import './App.css';
import Home from './pages/HomeComponent';
import Educatiom from './pages/Education';
import Contact from './pages/ContactComponent';
import Projects from './pages/Projects';
import Skill from './pages/Skills';
import About from './pages/About';
import NotFound from './pages/NotFound';


function App() {
  return (
    <div className="App">
      <Router>
      <Switch> 
        <Route exact path='/' component={Home}></Route> 
        <Route exact path='/about' component={About}></Route> 
        <Route exact path='/contact' component={Contact}></Route>
        <Route exact path='/education' component={Educatiom}></Route>
        <Route exact path='/projects' component={Projects}></Route>
        <Route exact path='/skill' component={Skill}></Route>
        <Route path="" component={NotFound} />
      </Switch> 
      </Router>
  </div>
  );
}

export default App;
