import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import Loadable from 'react-loadable';

import logo from './logo.svg';
import './App.css';

const Loading = () => <div>Loading</div>;

const Home = Loadable({
  loader: () => import('./Home'),
  loading: Loading
});

const FilmsPage = Loadable({
  loader: () => import('./films/FilmsPage'),
  loading: Loading
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/films">Films</Link>
              </li>
            </ul>
            <hr />
            <Route exact path="/" component={Home} />
            <Route path="/films" component={FilmsPage} />
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
