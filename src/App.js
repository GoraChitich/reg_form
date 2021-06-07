import './App.css';
import React, { Component } from 'react';
import Form from './components/Form/Form.js';
import FormUpdate from './components/FormUpdate/FormUpdate.js';

import { BrowserRouter as Route, Switch, HashRouter } from "react-router-dom"
import DeleteOrder from './components/DeleteOrder/DeleteOrder';

class App extends Component {

  render() {
     const baseName = process.env.PUBLIC_URL;

    return (
      <div className="App">
        <HashRouter basename={baseName} >
          <Switch>
            <Route path="/" exact >
              <Form />
            </Route>
            <Route path="/update/:id" exact>
              <FormUpdate />
            </Route>
            <Route path="/delete/:id" exact>
              <DeleteOrder />
            </Route>
          </Switch>
        </HashRouter>
      </div>

    );
  }
}

export default App;
