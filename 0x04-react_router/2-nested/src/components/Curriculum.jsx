import React from 'react';
import { Link, Route } from 'react-router-dom';
import Year1 from './curriculum/Year1.jsx';
import Year2 from './curriculum/Year2.jsx';

const Curriculum = ({ match }) => (
  <div>
    <ul>
      <li><Link to={`${match.url}/year_1`>Year 1</Link></li>
      <li><Link to={`${match.url}/year_2`>Year 2</Link></li>
    </ul>
      <Route path="{`${match.path}/:name`} render= {({match}) => (
    <div><h3> {match.params.name} </h3></div>)}/>
  </div>
)

export default Curriculum;