import React from 'react';
import { Link, Route } from 'react-router-dom';
import Year from './Year.jsx';
import { connect } from 'react-redux';

// render the correct curriculum
class Curriculum extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.curriculum.map(function(current_curriculum,i) {
            return (
              <li key={i}><Link to={"/curriculum/" + current_curriculum.id}>{current_curriculum.name}</Link></li>
            )
          })}
        </ul>

        <Route path="/curriculum/:year_id" component={Year}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { curriculum: state.curriculum[0] }
}
export default connect(mapStateToProps)(Curriculum);