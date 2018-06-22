import React from 'react';
import './App.css';

import { HashRouter as Router, Route, Switch } from "react-router-dom";

import LoginScreen from './Screens/LoginScreen';
import AllEventsScreen from './Screens/AllEventsScreen';
import OneEventScreen from './Screens/OneEventScreen';
import ShoppingListScreen from './Screens/ShoppingListScreen';
import CreateNewScreen from './Screens/CreateNewScreen';
import RegisterScreen from './Screens/RegisterScreen';
import LogoutScreen from './Screens/LogoutScreen';
 
const App = () => {
  return (
    <Router>
        <Switch>
          <Route path="/" exact component={LoginScreen}/>
          <Route path="/register" component={RegisterScreen}/>
          <Route path="/logout" component={LogoutScreen}/>
          <Route path="/events/:id" component={OneEventScreen}/>
          <Route path="/events" exact component={AllEventsScreen}/>
          <Route path="/new" component={CreateNewScreen}/>
          <Route path="/shoppinglist/:id" component={ShoppingListScreen}/>
        </Switch>
    </Router>
  )
};
export default App;
