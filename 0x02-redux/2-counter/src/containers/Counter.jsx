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
        <div>{this.props.counter}</div>
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

export default connect(mapStateToProps)(CounterContainer);
