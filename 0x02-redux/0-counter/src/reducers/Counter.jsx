import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionsCreators } from 'redux';

const Counter = React.creatClass({
  displayName: 'Counter',
  render() {
    const { increment, count } = this.props;
    return (
      <div>
        Current counter value: {count}
        <div><button onClick={(e) => increment()}>Increment</button></div>
      </div>
    );
  }
});

const Increment = 'INCREMENT';

function increment() {
  return {
    type: types.Increment
  }
}

function mapStateToProps(state) {
  return {
    count: state
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionsCreators(actions, dispatch)
}

function CounterApp(state = 0, action) {
  switch(action.type) {
    case types.INCREMENT:
      return state = state + 1;
  }
  return state;
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
