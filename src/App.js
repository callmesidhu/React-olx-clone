import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Signup from './Pages/Signup'
import Home from './Pages/Home';

function App() {
  return (
    <div>
      <Router>
        <Route exact path='/'>
          <Home/>
        </Route>
      </Router>
      <Router>
        <Route path='/signup'>
          <Signup/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
