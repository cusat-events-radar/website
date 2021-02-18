import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

// import About from './pages/about/About'
import CodeOfConduct from './pages/CodeOfConduct/CodeOfConduct'
import Home from './pages/home/Home'

import './App.css'

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/join">
            <Redirect to="/code-of-conduct" />
          </Route>
          <Route exact path="/code-of-conduct">
            <CodeOfConduct />
          </Route>
          {/* <Route exact path="/about">
            <About />
          </Route> */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

