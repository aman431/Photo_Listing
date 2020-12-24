import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import store from "./store";
import Dashboard from './components/Dashboard/index';
import Details from './components/Details/details';
import Login from './components/Login/index';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/" component={Login}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
