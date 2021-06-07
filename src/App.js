import './App.css';
import React, { Component } from 'react';
import Form from './components/Form/Form.js';
import FormUpdate from './components/FormUpdate/FormUpdate.js';
// import ReadList from './ReadList.js';
// <Route path="/test" exact component={ReadList}/>

import DelAppointment from './DelAppointment.js';
import { BrowserRouter as Route, Switch, HashRouter } from "react-router-dom"

class App extends Component {

  render() {
    // const baseName = process.env.PUBLIC_URL;

    return (
      <div className="App">
        <HashRouter >
          <Switch>
            <Route path="/" exact >
              <Form />
            </Route>
            <Route path="/update/:id" exact>
              <FormUpdate />
            </Route>
            <Route path="/updateAppointment" exact component={Form} />
            <Route path="/delAppointment" exact component={DelAppointment} />
          </Switch>
        </HashRouter>
      </div>

    );
  }
}

export default App;
