import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

import Home from './home'
import About from './about'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
