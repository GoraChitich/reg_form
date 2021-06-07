import './App.css';
import React, { Component } from 'react';
import Form from './components/Form/Form.js';
// import ReadList from './ReadList.js';
// <Route path="/test" exact component={ReadList}/>

import DelAppointment from './DelAppointment.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class App extends Component {

  render() {
    const baseName = window.location.hostname === 'localhost' ? null : process.env.PUBLIC_URL;

    return (
      <Router basename={baseName}>
        <div className="App">
          <Route path="/" exact component={Form} />
          <Route path="/updateAppointment" exact component={Form} />
          <Route path="/delAppointment" exact component={DelAppointment} />
        </div>
      </Router>
    );
  }
}

export default App;
