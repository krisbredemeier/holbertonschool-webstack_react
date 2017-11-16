import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionsCreators } from 'redux';

const Counter = React.createClass({
  displayName: 'Counter',
  render () {
    const { increment, count } = this.props;
    return(
      <div>
        Current counter value: {count}
        <div><button onClick={(e) => increment()}>Increment</button><div>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    count: state
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionsCreators(dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
