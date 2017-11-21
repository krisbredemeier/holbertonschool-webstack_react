import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from './Button.jsx';

class CounterContainer extends React.Component{
  displayName: 'Counter'
  render () {
    const { increment, decrement, count } = this.props;
    return(
      <div>
        Current counter value: {count}
        <Button text="Increment" fct={()=>this.props.increment()} />
        <Button text="Decrement" fct={()=>this.props.decrement()} />
      </div>
    );
  }
};

//actions

export function increment() {
  return {
    type: "INCREMENT"
  }
};

export function decrement() {
  return {
    type: "DECREMENT"
  }
};

function mapStateToProps(state) {
  return {
    count: state
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    increment: increment,
    decrement: decrement
  },
    dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
