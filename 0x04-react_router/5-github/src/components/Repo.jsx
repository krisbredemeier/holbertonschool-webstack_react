import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from './Loader.jsx';
import { fetchCommits } from '../actions/Actions.jsx';

class Repo extends React.Component {
  // render loader image
  render() {
    if(this.props.fetching) {
      return (
        <Loader/>
      )
    }
    // render commits based on repo
    else if(!this.props.commits) {
      reurn (
        <h1>Nothing</h1>
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
