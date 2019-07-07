import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Search from './components/search';
import Saved from './components/Saved';


function App() {
  return (
    <div>
      <Switch>
        <Route path='/search' component={Search} />
        <Route path='/saved' component={Saved} />
       </Switch>
      <div><h1>Google Book Search</h1></div>
    </div>
  );
}

export default App;
