import React, { Component } from 'react'
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Registration from "./page/registration";
export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route path = '/registration' component = {Registration}/>
        </Router>
      </div>
    )
  }
}

export default App

