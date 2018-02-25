import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from './Loader.jsx';
import { fetchCommits } from '../actions/Actions.jsx';

class Repos extends React.Component {
  // first render loader image
  render() {
    if(this.props.fetching) {
      return (
        <Loader/>
      )
    }
    // render repos as link
    else {
      return (
        <div>
          <ul>
            {this.props.repos.map(function(repo,i) {
              return (
                <li key={i}><Link to={"/repo/" + repo.name}>{repo.name}</Link></li>
              )
            })}
          </ul>
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return { fetching: state.fetching, repos: state.repos }
}
export default connect(mapStateToProps)(Repos);
