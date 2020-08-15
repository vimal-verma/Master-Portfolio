import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import './App.css';
import Home from './pages/HomeComponent';
import Experience from './pages/Experience';
import Contact from './pages/ContactComponent';
import Project from './pages/Projects';
import Skill from './pages/Skills';
import About from './pages/About';
import NotFound from './pages/NotFound';


function App() {
  return (
    <div>
      <Router>
      <Switch> 
        <Route exact path='/' component={Home}></Route> 
        <Route exact path='/about' component={About}></Route> 
        <Route exact path='/contact' component={Contact}></Route>
        <Route exact path='/experience' component={Experience}></Route>
        <Route exact path='/project' component={Project}></Route>
        <Route exact path='/skill' component={Skill}></Route>
        <Route path="" component={NotFound} />
      </Switch> 
      </Router>
  </div>
  );
}

export default App;
