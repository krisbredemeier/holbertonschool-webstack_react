import React from 'react';
import { Link, Route } from 'react-router-dom';
import Year1 from './curriculum/Year1.jsx';
import Year2 from './curriculum/Year2.jsx';

const Curriculum = () => (
  <div>
    <ul>
      <li><Link to="/curriculum/year_1">Year 1</Link></li>
      <li><Link to="/curriculum/year_2">Year 2</Link></li>
    </ul>
      <Route path="/curriculum/year_1" component={Year1}/>
      <Route path="/curriculum/year_2" component={Year2}/>
  </div>
)

export default Curriculum;