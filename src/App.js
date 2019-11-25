import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Register from './components/Register';
import Navbar from './components/CustomNavbar';

class App extends Component {
  render() {
    return (
      <Router>
          <Navbar></Navbar>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/register" component={Register} />
          <footer>
            <div className="copyright">&copy; 2019 BoogalooBuddies.com</div>
          </footer>
      </Router>
    )
  }
}


export default App;