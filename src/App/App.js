import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.scss';
import Welcome from "../Welcome/Welcome";
import Chat from "../Chat/Chat";

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <Router>
          <Route path="/" component={Welcome}/>
          <Route path="/chat" component={Chat}/>
          <Route path="/activity" component={Welcome}/>
          <Route path="/about" component={Welcome}/>
        </Router>
      </div>
    );
  }
}

export default App;
