import React, { Component } from 'react'
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Registration from "./page/registration";
import Login from "./page/login";
export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path = '/' component = {Login}/>
          <Route path = '/login' component = {Login}/>
          <Route path = '/registration' component = {Registration}/>
        </Router>
      </div>
    )
  }
}

export default App

