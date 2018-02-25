import React from 'react';
import { Link, Route } from 'react-router-dom';
import Year from './Year.jsx';

const Curriculum = ({ match }) => (
  <div>
    <ul>
      <li><Link to="/curriculum/year_1">Year1</Link></li>
      <li><Link to="/curriculum/year_2">Year2</Link></li>
      <li><Link to="/curriculum/year_3">Year3</Link></li>
      <li><Link to="/curriculum/year_4">Year4</Link></li>
    </ul>
      <Route path="/curriculum/:name" component={Year}/>
  </div>
)

export default Curriculum;