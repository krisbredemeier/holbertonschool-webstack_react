import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Header = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/holberton">Holberton</Link></li>
        <li><Link to="/school">School</Link></li>
      </ul>
      <switch>
	<Route exact path="/" component={ Home }/>
	<Routh path="/holberton" compoent={ Holberton }/>
	<Routh path="/school" compoent={ School }/>
      </switch>
    </div>
  </Router>
)
export default Header;