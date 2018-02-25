import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from './Loader.jsx';
import { fetchCommits } from '../actions/Actions.jsx';

class Repo extends React.Component {
  render() {
    if(this.props.fetching) {
      return (
        <Loader/>
      )
    }
    else {
      return (
        <div>
          <ul>
            {this.props.commits[0].map(function(commit,i) {
              return (
                <li key={i}><b>{commit.sha}</b></li>
              )
            })}
          </ul>
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return { fetching: state.fetching, commits: state.commits }
}
export default connect(mapStateToProps)(Repo);
