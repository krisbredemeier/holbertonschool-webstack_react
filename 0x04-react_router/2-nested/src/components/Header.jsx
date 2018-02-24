import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Holberton from './Holberton.jsx';
import School from './School.jsx';

const Header = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/holberton">Holberton</Link></li>
        <li><Link to="/school">School</Link></li>
	<li><Link to="/curriculum">Curriculum</Link></li>
      </ul>
      <switch>
      	<Route exact path="/" component={Home}/>
      	<Route path="/holberton" component={Holberton}/>
      	<Route path="/school" component={School}/>
	<Route pah="/curriculum" component={Curriculum}/>
      </switch>
    </div>
  </Router>
)
export default Header;