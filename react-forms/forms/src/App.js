import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './components/form'
import MultipleInputs from './components/multiple-inputs'

import TemperatureCalculator from './components/temp-calculator'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact={true} path="/" render={() => (
              <div>
                <div className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                  To get started, edit <code>src/App.js</code> and save to reload.</p>
                <Form />
                <br />
                <MultipleInputs />
                <br />
                <TemperatureCalculator />
                <br />
                <a href={'/g/text'}>Meu primeiro Root</a>
              </div>)} />
            <Route path="/g/:id" component={Form} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
