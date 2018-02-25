import React from 'react';
import { Link, Route } from 'react-router-dom';
import Year from './Year.jsx';
import { connect } from 'react-redux';


class Curriculum extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.curriculum.map(function(c,i) {
            return (
              <li key={i}><Link to={"/curriculum/" + c.id}>{c.name}</Link></li>
            )
          })}
        </ul>

        <Route path="/curriculum/:year_id" component={Year}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    curriculum: state.curriculum
  }
}
export default connect(mapStateToProps)(Curriculum);