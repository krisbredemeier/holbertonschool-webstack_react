import React from 'react';
import { Link, Route } from 'react-router-dom';
import Year from './Year.jsx';

const Curriculum = ({ match }) => { return (
  <div>
    <ul>
      <li><Link to={`${match.url}/curriculum/year_1`}>Year1</Link></li>
      <li><Link to={`${match.url}/curriculum/year_2`}>Year2</Link></li>
    </ul>
      <Route path={`${match.path}/curriculum/:name`} render= {({match}) =>( <div> <h3> {match.params.name} </h3></div>)}/>
  </div>
)
}
export default Curriculum;