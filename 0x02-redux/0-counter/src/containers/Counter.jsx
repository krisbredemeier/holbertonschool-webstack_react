import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionsCreators } from 'redux';

class CounterContainer extends React.Component{
  displayName: 'Counter'
  render () {
    const { increment, count } = this.props;
    return(
      <div>
        Current counter value: {count}
        <div><button onClick={(e) => increment()}>Increment</button></div>
      </div>
    );
  }
};

//actions

export function increment() {
  return {
    type: "INCREMENT"
  }
}


function mapStateToProps(state) {
  return {
    count: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionsCreators({
    increment: increment
  },
    dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
