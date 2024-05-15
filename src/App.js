import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Signup from './Pages/Signup'
import Home from './Pages/Home';
import Login from './Pages/Login'

function App() {
  return (
    <div>
      <Router>

        <Route exact path='/'> <Home/> </Route>
        <Route path='/login'>  <Login/> </Route>
        <Route path='/signup'> <Signup/> </Route>
        
      </Router>
    </div>
  );
}

export default App;
